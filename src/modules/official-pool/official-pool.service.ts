import { Injectable } from '@nestjs/common';
import Decimal from 'decimal.js';
import { utils } from 'ethers';
// import { utils } from 'ethers';

import { PoolShare } from '../../gql/graphql';
import { NestedObject, Pools } from '../../types/interface';
import { EthersService } from '../ethers/ethers.service';
import { QqlService } from '../qql/qql.service';
import { GET_POOLS_QUERY, GET_POOLS_SHARES_QUERY } from '../../graphql/queries';

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
          officialPool.address,
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
    nestedPools: string[],
    totalAllocation: string,
  ): Promise<string[][]> {
    const resultObject = {};
    let nestedPoolAddress = '';
    for (const blockNumber of weeklyBlockNumbers) {
      resultObject[blockNumber] = {};

      const subGraphPools: Pools = await this.qqlService.request(
        GET_POOLS_QUERY,
        {
          where: { id_in: incentivisedPools },
          blockNumber: blockNumber,
        },
      );

      const subGraphNestedPools: Pools = await this.qqlService.request(
        GET_POOLS_QUERY,
        {
          where: { id_in: nestedPools },
          blockNumber: blockNumber,
        },
      );
      nestedPoolAddress = subGraphNestedPools.pools[0].address;
      subGraphPools.pools.push(...subGraphNestedPools.pools);
      for (const incentivisedPool of subGraphPools.pools) {
        const result = await this.processPool(incentivisedPool.id, blockNumber);
        resultObject[blockNumber][incentivisedPool.address] = result;
      }
    }

    const sumAllLp = this.sumAllLpPercentInPoolPerBlockNumberWithNesting(
      resultObject,
      nestedPoolAddress,
    );

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
            (result[blocknumber][lpAddress] as Decimal) || new Decimal(0)
          ).add(object[blocknumber][poolAddress][lpAddress]);
        }
      }
    }

    return result;
  }

  /**
   * Sums up all LP (Liquidity Provider) percentages within each pool for each block number.
   *
   * @param {NestedObject} object - An object containing nested data representing LP percentages for each pool and block number.
   * @returns {NestedObject} - An object containing summed LP percentages within each pool for each block number.
   */
  private sumAllLpPercentInPoolPerBlockNumberWithNesting(
    object: NestedObject,
    nestedPoolAddress: string,
  ): NestedObject {
    const result: NestedObject = {};
    const vaultAddress = '0x428aec7c1e0c9a52686774434a1d6de5134ac529';
    let nestedPoolAmount = new Decimal(0);

    for (const blocknumber in object) {
      result[blocknumber] = {};

      for (const poolAddress in object[blocknumber] as NestedObject) {
        for (const lpAddress in object[blocknumber][poolAddress]) {
          if (lpAddress == vaultAddress) {
            nestedPoolAmount = nestedPoolAmount.add(
              object[blocknumber][poolAddress][lpAddress],
            );
          } else if (poolAddress == nestedPoolAddress) {
            const normalizedValue =
              object[blocknumber][poolAddress][lpAddress].mul(nestedPoolAmount);
            result[blocknumber][lpAddress] = (
              (result[blocknumber][lpAddress] as Decimal) || new Decimal(0)
            ).add(normalizedValue);
          } else {
            result[blocknumber][lpAddress] = (
              (result[blocknumber][lpAddress] as Decimal) || new Decimal(0)
            ).add(object[blocknumber][poolAddress][lpAddress]);
          }
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
    officialPoolAddress: string,
    officialPoolId: string,
    blockNumber: number,
    officialPoolWeight: string,
    totalWeight: number,
  ) {
    const { shares } = await this.fetchPoolShares(officialPoolId, blockNumber);

    return await this.processSharesPerOfficialPool({
      shares,
      blockNumber,
      poolAddress: officialPoolAddress,
      officialPoolWeight,
      totalWeight,
    });
  }

  private async fetchPoolShares(
    poolId: string,
    blockNumber: number,
  ): Promise<{ shares: PoolShare[]; totalShares: string }> {
    const shares: PoolShare[] = [];
    let fetchFinished = false;
    let i = 0;
    let totalShares = '0';
    while (!fetchFinished) {
      const subGraphPools: Pools = await this.qqlService.request(
        GET_POOLS_SHARES_QUERY,
        {
          where: { id: poolId },
          blockNumber: blockNumber,
          skip: i * 1000,
        },
      );
      if (shares) shares.push(...subGraphPools.pools[0].shares);

      if (subGraphPools.pools[0].shares.length !== 1000) fetchFinished = true;
      totalShares = subGraphPools.pools[0].totalShares.toString();
      ++i;
    }
    return { shares, totalShares: totalShares };
  }

  private async processPool(officialPoolId: string, blockNumber: number) {
    const { shares, totalShares } = await this.fetchPoolShares(
      officialPoolId,
      blockNumber,
    );

    return await this.processSharesPerPool({
      shares,
      totalShares,
    });
  }

  private async processSharesPerPool({
    shares,
    totalShares,
  }: {
    shares: PoolShare[];
    totalShares: string;
  }): Promise<NestedObject> {
    const result = {};
    for (const share of shares) {
      const lpShare = new Decimal(share.balance).div(totalShares);
      if (!result[share.userAddress.id]) {
        result[share.userAddress.id] = new Decimal(0);
      }
      const lpShareNormalizedByWeightsAndNumberOfPools = lpShare;

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
