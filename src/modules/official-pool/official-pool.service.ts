import { Injectable } from '@nestjs/common';
import Decimal from 'decimal.js';
import { utils } from 'ethers';
// import { utils } from 'ethers';

import { Pool } from '../../gql/graphql';
import { NestedObject, Pools } from '../../types/interface';
import { EthersService } from '../ethers/ethers.service';
import { QqlService } from '../qql/qql.service';
import { GET_POOLS_QUERY } from '../../graphql/queries';

@Injectable()
export class OfficialPoolService {
  constructor(
    private readonly etherService: EthersService,
    private readonly qqlService: QqlService,
  ) {}

  /**
   * Calculates the weekly reward in percentage for each LP (Liquidity Provider) across all official pools.
   *
   * @param {number[]} weeklyBlockNumbers - An array of block numbers representing a week.
   * @param {Pool[]} subGraphPools - An array of pool data containing information about pools.
   * @returns {Promise<string[][]>} - A Promise resolving to an array containing formatted data with LP addresses and their corresponding weekly reward percentages.
   */
  async calculateWeeklyLPRewardsDistributionInPercentages(
    weeklyBlockNumbers: number[],
    totalAllocation: string,
  ): Promise<string[][]> {
    const resultObject = {};
    for (const blockNumber of weeklyBlockNumbers) {
      resultObject[blockNumber] = {};

      const subGraphPools: Pools = await this.qqlService.request(
        GET_POOLS_QUERY,
        {
          where: { officialPool: true },
          blockNumber: blockNumber,
        },
      );
      // sum all official pool weights
      const totalWeight: number = subGraphPools.pools.reduce(
        (acc, pool) => acc + parseInt(pool.officialPoolWeight),
        0,
      );

      for (const officialPool of subGraphPools.pools) {
        const result = await this.processOfficialPool(
          subGraphPools.pools,
          officialPool.id,
          blockNumber,
          officialPool.officialPoolWeight,
          totalWeight,
        );

        resultObject[blockNumber][officialPool.id] = result;
      }
    }

    const sumAllLp = this.sumAllLpPercentInPoolPerBlockNumber(resultObject);

    return this.sumAllLpPercent(sumAllLp, totalAllocation);
  }

  async calculateWeeklyLPThirdPartyRewardsDistribution(
    weeklyBlockNumbers: number[],
    incentivisedPools: string[],
    totalAllocation: string,
  ): Promise<string[][]> {
    const resultObject = {};
    for (const blockNumber of weeklyBlockNumbers) {
      resultObject[blockNumber] = {};

      const subGraphPools: Pools = await this.qqlService.request(
        GET_POOLS_QUERY,
        {
          where: { id_in: incentivisedPools },
          blockNumber: blockNumber,
        },
      );

      for (const incentivisedPool of subGraphPools.pools) {
        const result = await this.processPool(
          subGraphPools.pools,
          incentivisedPool.id,
          blockNumber,
          subGraphPools.pools.length,
        );

        resultObject[blockNumber][incentivisedPool.id] = result;
      }
    }

    const sumAllLp = this.sumAllLpPercentInPoolPerBlockNumber(resultObject);

    return this.sumAllLpPercent(sumAllLp, totalAllocation);
  }
  /**
   * Sums up all LP (Liquidity Provider) percentages within each pool for each block number.
   *
   * @param {NestedObject} object - An object containing nested data representing LP percentages for each pool and block number.
   * @returns {NestedObject} - An object containing summed LP percentages within each pool for each block number.
   */
  private sumAllLpPercentInPoolPerBlockNumber(
    object: NestedObject,
  ): NestedObject {
    const result: NestedObject = {};

    for (const blocknumber in object) {
      result[blocknumber] = {};

      for (const poolAddress in object[blocknumber] as NestedObject) {
        for (const lpAddress in object[blocknumber][poolAddress]) {
          result[blocknumber][lpAddress] = (
            result[blocknumber][lpAddress] || new Decimal(0)
          ).add(object[blocknumber][poolAddress][lpAddress]);
        }
      }
    }

    return result;
  }

  /**
   * Calculates the average LP (Liquidity Provider) percentage across all official pools and weekly blocks.
   *
   * @param {NestedObject} object - An object containing nested data representing LP percentages for official pools and weekly blocks.
   * @returns {Promise<string[][]>} - A Promise resolving to an array containing formatted data with addresses and their corresponding average LP percentages.
   */
  private async sumAllLpPercent(
    object: NestedObject,
    totalAllocation: string,
  ): Promise<string[][]> {
    const summedValues = {};

    for (const key in object) {
      const innerDict = object[key];

      for (const address in innerDict as NestedObject) {
        if (!summedValues[address]) {
          summedValues[address] = new Decimal(0);
        }
        summedValues[address] = summedValues[address].add(innerDict[address]);
      }
    }

    const formattedData = Object.entries(summedValues).map(
      ([address, sumValue]) => [
        utils.getAddress(address),
        (sumValue as Decimal).div(7).times(totalAllocation).toFixed(0),
      ],
    );

    return formattedData;
  }

  /**
   * Processes LP (Liquidity Provider) shares for each user in a specific official pool.
   *
   * @param {Pool[]} data - An array of pool data containing information about pools.
   * @param {string} officialPool - The identifier of the official pool to be processed.
   * @param {number} blockNumber - The block number at which the processing is performed.
   * @returns {Promise<Object | undefined>} - A Promise resolving to an object containing user IDs and their corresponding processed LP shares for the specified official pool. Returns undefined if the official pool or its relevant data is not found.
   */
  private async processOfficialPool(
    data: Pool[],
    officialPool: string,
    blockNumber: number,
    officialPoolWeight: string,
    totalWeight: number,
  ) {
    const { address, shares } = data.find((el: any) => el.id === officialPool);

    if (address && shares) {
      return await this.processSharesPerOfficialPool({
        shares,
        blockNumber,
        poolAddress: address,
        officialPoolWeight,
        totalWeight,
      });
    }
  }
  private async processPool(
    data: Pool[],
    officialPool: string,
    blockNumber: number,
    numberOfPools: number,
  ) {
    const { address, shares } = data.find((el: any) => el.id === officialPool);

    if (address && shares) {
      return await this.processSharesPerPool({
        shares,
        blockNumber,
        poolAddress: address,
        numberOfPools,
      });
    }
  }

  private async processSharesPerPool({
    shares,
    blockNumber,
    poolAddress,
    numberOfPools,
  }: {
    shares: any[];
    blockNumber: number;
    poolAddress: string;
    numberOfPools: number;
  }): Promise<NestedObject> {
    const result = {};
    for (const share of shares) {
      const lpShare = await this.getLpShare({
        blockNumber,
        poolAddress,
        lpId: share.userAddress.id,
      });

      if (!result[share.userAddress.id]) {
        result[share.userAddress.id] = new Decimal(0);
      }
      const lpShareNormalizedByWeightsAndNumberOfPools =
        lpShare.div(numberOfPools);

      result[share.userAddress.id] = result[share.userAddress.id].add(
        lpShareNormalizedByWeightsAndNumberOfPools,
      );
    }

    return result;
  }
  /**
   * Processes LP (Liquidity Provider) shares for each user in a given pool.
   *
   * @param {Object} params - An object containing parameters for the processing.
   * @param {any[]} params.shares - An array of user shares.
   * @param {number} params.blockNumber - The block number at which the processing is performed.
   * @param {string} params.poolAddress - The address of the pool.
   * @param {string} params.officialPoolsLength - Number of offical pools in that block
   * @param {string} params.officialPoolWeight - Weight of offical pool in that block
   * @param {string} params.totalWeight - Total weight of all offical pools in that block
   * @returns {Promise<NestedObject>} - A Promise resolving to an object containing user IDs and their corresponding processed LP shares.
   */
  private async processSharesPerOfficialPool({
    shares,
    blockNumber,
    poolAddress,
    officialPoolWeight,
    totalWeight,
  }: {
    shares: any[];
    blockNumber: number;
    poolAddress: string;
    officialPoolWeight: string;
    totalWeight: number;
  }): Promise<NestedObject> {
    const result = {};
    for (const share of shares) {
      const lpShare = await this.getLpShare({
        blockNumber,
        poolAddress,
        lpId: share.userAddress.id,
      });

      if (!result[share.userAddress.id]) {
        result[share.userAddress.id] = new Decimal(0);
      }
      const lpShareNormalizedByWeightsAndNumberOfPools = lpShare
        .mul(officialPoolWeight)
        .div(totalWeight);

      result[share.userAddress.id] = result[share.userAddress.id].add(
        lpShareNormalizedByWeightsAndNumberOfPools,
      );
    }

    return result;
  }

  /**
   * Retrieves the LP (Liquidity Provider) share percentage based on the provided parameters.
   *
   * @param {Object} params - An object containing parameters for the calculation.
   * @param {number} params.blockNumber - The block number at which the calculation is performed.
   * @param {string} params.poolAddress - The address of the pool.
   * @param {string} params.lpId - The identifier for the LP (Liquidity Provider).
   * @returns {Promise<Decimal>} - A Promise resolving to the calculated LP share percentage as a Decimal value.
   */
  private async getLpShare({
    blockNumber,
    poolAddress,
    lpId,
  }: {
    blockNumber: number;
    poolAddress: string;
    lpId: string;
  }): Promise<Decimal> {
    const lpBalance = new Decimal(
      await this.etherService.getBalanceOfStorageAt({
        poolAddress,
        lpId,
        blockNumber,
      }),
    ).toNumber();
    const totalShares = await this.etherService.getTotalSupply(
      poolAddress,
      blockNumber,
    );
    return this.getLpPercentInShare(lpBalance, totalShares);
  }

  /**
   * Calculates the percentage of LP (Liquidity Provider) balance in relation to the total shares.
   *
   * @param {number} lpBalance - The balance of LP.
   * @param {number} totalShares - The total number of shares.
   * @returns {Decimal} - The calculated percentage as a Decimal value.
   */
  private getLpPercentInShare(lpBalance: number, totalShares: number): Decimal {
    return new Decimal(lpBalance).div(totalShares);
  }
}
