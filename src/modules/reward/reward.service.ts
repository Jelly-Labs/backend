import { Injectable, Logger } from '@nestjs/common';
import Decimal from 'decimal.js';
import { ethers, utils } from 'ethers';
import {
  GET_JOIN_EXITS_PER_ADDRESS,
  GET_TOTAL_ALLOCATION_PER_EPOCH,
} from '../../graphql/queries';
import { NestedObject, TokenMints, JoinExits } from '../../types/interface';
import { EthersService } from '../ethers/ethers.service';
import { IpfsService } from '../ipfs/ipfs.service';
import { OfficialPoolService } from '../official-pool/official-pool.service';
import { QqlService } from '../qql/qql.service';
import { SesService } from '../ses/ses.service';

@Injectable()
export class RewardService {
  private readonly logger = new Logger(RewardService.name);

  constructor(
    private readonly qqlService: QqlService,
    private readonly officialPoolService: OfficialPoolService,
    private readonly ipfs: IpfsService,
    private readonly ethersService: EthersService,
    private readonly sesService: SesService,
  ) {}

  async weeklyLPRewardsDistributionSnapshot(epoch = '0') {
    const content =
      await this.weeklyLPRewardsDistributionSnapshotIPFSData(epoch);

    if (content) {
      this.logger.debug('start sending merklee tree to the ipfs...');

      const ipfsHash = await this.ipfs.upload(content);

      this.logger.debug(
        `ipfsHah: ${ipfsHash}, merkleeTreeRoot: ${content.merkleTreeRoot}`,
      );
      return;
    }
  }

  async weeklyLPRewardsDistributionSnapshotPost(
    merkleTreeRoot = '',
    ipfsHash = '',
    proposalDescription = '',
  ) {
    this.logger.debug('call Governance contract to create proposal...');
    const createEpochFunctionCalldata = this.ethersService
      .getLPDistributionSmartContract()
      .interface.encodeFunctionData('createEpoch', [merkleTreeRoot, ipfsHash]);
    this.logger.debug(
      'createEpochFunctionCalldata: ',
      createEpochFunctionCalldata,
    );
    this.logger.debug('proposalDescription: ', proposalDescription);
    // return;
    const transactionRequest = await this.ethersService
      .getGovernanceSmartContract()
      .proposeCustom(
        [this.ethersService.getLPDistributionSmartContract().address],
        [0],
        [createEpochFunctionCalldata],
        proposalDescription,
        '3600',
        '86400',
      );

    this.logger.debug(
      'transaction successfully submitted ' + transactionRequest.hash,
    );
    const receipt = await transactionRequest.wait();
    this.logger.debug(
      'transaction accepted by the network ' + transactionRequest.hash,
    );
    return receipt;
  }

  async weeklyLPRewardsDistributionSnapshotIPFSData(epoch = '0', email = '') {
    this.logger.debug('get epoch daily block numbers...');
    const weeklyBlockNumbers = await this.getEpochSnapshots(epoch);
    this.logger.debug('done getting epoch daily block numbers...');
    const lpContractAddress = this.ethersService
      .getLPDistributionSmartContract()
      .address.toLowerCase();
    this.logger.debug('get total allocation...');
    const totalAllocation: TokenMints = await this.qqlService.request(
      GET_TOTAL_ALLOCATION_PER_EPOCH,
      {
        where: {
          epoch: epoch,
        },
      },
    );
    this.logger.debug('done getting total allocation...');

    this.logger.debug('started calculating process...');
    if (totalAllocation.tokenMints.length === 0) {
      this.logger.error('no token mints found for epoch: ' + epoch);
      return;
    }

    const mintBlock = await this.ethersService.findClosestBlock(
      totalAllocation.tokenMints[0].timestamp,
      weeklyBlockNumbers[6],
    );
    const weightLP = await this.ethersService.getLPWeightOfTotalAllocation(
      lpContractAddress,
      mintBlock,
    );

    const amountForLP = new Decimal(totalAllocation.tokenMints[0].amount)
      .mul(weightLP)
      .div(1000)
      .toFixed(0);

    const calculateWeeklyRewardInPercentageInPool =
      await this.officialPoolService.calculateWeeklyLPRewardsDistributionInPercentages(
        weeklyBlockNumbers,
        amountForLP,
      );

    this.logger.debug('end calculating process...');

    if (calculateWeeklyRewardInPercentageInPool) {
      this.logger.debug('start generating ipfs content...');
      const { content } = this.ipfs.generateIpfsContent(
        calculateWeeklyRewardInPercentageInPool,
        weeklyBlockNumbers,
        'LP Reward Distribution',
        epoch,
      );

      if (email !== '') {
        this.logger.debug('send email to: ', email);
        const subject =
          'LP Reward Distribution IPFS metadata calulation for epoch ' + epoch;
        const stringContent = JSON.stringify(content);
        const fullContent =
          'Requested/Calculated LP reward distribution ipfs data:\n' +
          stringContent;
        this.sesService.sendTextEmail(email, subject, fullContent);
      }

      return content;
    } else {
      this.logger.debug('could not generate ipfs content');
    }
  }

  async approveOwnershipTransfer() {
    const acceptOwnershipLP = this.ethersService
      .getLPDistributionSmartContract()
      .interface.encodeFunctionData('acceptOwnership');
    const acceptOwnershipStaking = this.ethersService
      .getStakingDistributionSmartContract()
      .interface.encodeFunctionData('acceptOwnership');
    const proposalDescription = 'Accept Ownership of JellyVerse Contracts';
    this.logger.debug('proposalDescription: ', proposalDescription);
    // return;
    const transactionRequest = await this.ethersService
      .getGovernanceSmartContract()
      .proposeCustom(
        [
          this.ethersService.getLPDistributionSmartContract().address,
          this.ethersService.getStakingDistributionSmartContract().address,
        ],
        [0, 0],
        [acceptOwnershipLP, acceptOwnershipStaking],
        proposalDescription,
        '3600',
        '86400',
      );

    const receipt = await transactionRequest.wait();
    this.logger.debug(
      'transaction accepted by the network ' + transactionRequest.hash,
    );
    return receipt;
  }

  async weeklyStakingRewardsDistributionSnapshot(epoch = '0') {
    const content =
      await this.weeklyStakingRewardsDistributionSnapshotIPFSData(epoch);
    if (content) {
      this.logger.debug('start sending merklee tree to the ipfs...');

      const ipfsHash = await this.ipfs.upload(content);

      this.logger.debug(
        `ipfsHah: ${ipfsHash}, merkleeTreeRoot: ${content.merkleTreeRoot}`,
      );
      return;
    }
  }

  async weeklyStakingRewardsDistributionSnapshotPost(
    merkleTreeRoot = '',
    ipfsHash = '',
    proposalDescription = '',
  ) {
    const createEpochFunctionCalldata = this.ethersService
      .getStakingDistributionSmartContract()
      .interface.encodeFunctionData('createEpoch', [merkleTreeRoot, ipfsHash]);
    this.logger.debug(
      'createEpochFunctionCalldata: ',
      createEpochFunctionCalldata,
    );
    this.logger.debug('proposalDescription: ', proposalDescription);
    // return;
    const transactionRequest = await this.ethersService
      .getGovernanceSmartContract()
      .proposeCustom(
        [this.ethersService.getStakingDistributionSmartContract().address],
        [0],
        [createEpochFunctionCalldata],
        proposalDescription,
        '3600',
        '86400',
      );

    this.logger.debug(
      'transaction successfully submitted ' + transactionRequest.hash,
    );
    const receipt = await transactionRequest.wait();
    this.logger.debug(
      'transaction accepted by the network ' + transactionRequest.hash,
    );
    return receipt;
  }

  async weeklyStakingRewardsDistributionSnapshotIPFSData(
    epoch = '0',
    email = '',
  ) {
    const weeklyBlockNumbers = await this.getEpochSnapshots(epoch);
    this.logger.debug('started calculating process...');
    const rewardDist =
      await this.calculateWeeklyStakingRewardsDistributionInPercentages(
        weeklyBlockNumbers,
      );
    this.logger.debug('end calculating process...');

    if (rewardDist) {
      this.logger.debug('start generating ipfs content...');
      const { content } = this.ipfs.generateIpfsContent(
        rewardDist,
        weeklyBlockNumbers,
        'Staking Reward Distribution',
        epoch,
      );
      this.logger.debug('end generating ipfs content...');
      if (content) {
        if (email !== '') {
          this.logger.debug('send email to: ', email);
          const subject =
            'Staking Reward Distribution IPFS metadata calulation for epoch ' +
            epoch;
          const stringContent = JSON.stringify(content);
          const fullContent =
            'Requested/Calculated staking reward distribution ipfs data:\n' +
            stringContent;
          this.sesService.sendTextEmail(email, subject, fullContent);
        }
        return content;
      }
    } else {
      this.logger.debug('could not generating ipfs content...');
    }
  }

  async calculateWeeklyStakingRewardsDistributionInPercentages(
    weeklyBlockNumbers: number[],
  ) {
    const chestVotingPowers = {};
    for (const blockNumber of weeklyBlockNumbers) {
      const chestsVotingPowerPerBlock = {};
      let totalChestVotingPower = 0;

      const chestStorageIndex =
        await this.ethersService.getChestStorageIndex(blockNumber);
      const allChests = new Decimal(chestStorageIndex).toNumber() - 1;
      for (let i = 0; i <= allChests; i++) {
        const chestStorageOwners =
          await this.ethersService.getChestStorageOwners(i, blockNumber);
        const chestOwnerAddress = ethers.utils.hexlify(
          ethers.utils.zeroPad(ethers.utils.stripZeros(chestStorageOwners), 20),
        );
        const blkNmb = new Decimal(blockNumber);
        const chestVotingPower = await this.ethersService
          .getChestSmartContract()
          .getChestPower(i, { blockTag: blkNmb.toHexadecimal() });
        if (chestsVotingPowerPerBlock[chestOwnerAddress]) {
          chestsVotingPowerPerBlock[chestOwnerAddress] = new Decimal(
            chestVotingPower.toString(),
          )
            .add(chestsVotingPowerPerBlock[chestOwnerAddress])
            .toNumber();
        } else {
          chestsVotingPowerPerBlock[chestOwnerAddress] = new Decimal(
            chestVotingPower.toString(),
          ).toNumber();
        }

        totalChestVotingPower = new Decimal(chestVotingPower.toString())
          .add(totalChestVotingPower)
          .toNumber();
      }
      this.logger.log(
        'totalChestVotingPower',
        totalChestVotingPower.toString(),
      );
      if (totalChestVotingPower !== 0) {
        // check for edge case when there is multiple same block numbers
        if (chestVotingPowers[blockNumber] === undefined) {
          chestVotingPowers[blockNumber] = Object.entries(
            chestsVotingPowerPerBlock,
          ).map(([address, votingPower]) => [
            address,
            new Decimal(votingPower as number)
              .div(totalChestVotingPower)
              .times('1000000000000000000') // scaling factor to 18 decimals
              .toFixed(0),
          ]);
        } else {
          chestVotingPowers[blockNumber] = chestVotingPowers[
            blockNumber
          ].concat(
            Object.entries(chestsVotingPowerPerBlock).map(
              ([address, votingPower]) => [
                address,
                new Decimal(votingPower as number)
                  .div(totalChestVotingPower)
                  .times('1000000000000000000') // scaling factor to 18 decimals
                  .toFixed(0),
              ],
            ),
          );
        }
      }
    }

    const resultArray = this.sumUpAllPercents(chestVotingPowers);
    return resultArray;
  }

  async postDailySnapshot() {
    const transaction = this.ethersService
      .getDailySnapshotContract()
      .dailySnapshot();
    return transaction;
  }

  async mintWeeklyJellyInflation() {
    const transaction = this.ethersService.getMinterSmartContract().mint();
    return transaction;
  }

  async getStakingEpoch() {
    const transaction = await this.ethersService
      .getStakingDistributionSmartContract()
      .epoch();
    return transaction.toString();
  }

  async getLPEpoch() {
    const transaction = await this.ethersService
      .getLPDistributionSmartContract()
      .epoch();
    return transaction.toString();
  }

  async getEpochSnapshots(epoch = '0') {
    const weeklySnapshots = [];
    for (let i = 0; i < 7; i++) {
      weeklySnapshots[i] = await this.ethersService
        .getDailySnapshotContract()
        .dailySnapshotsPerEpoch(epoch, i);
    }
    return weeklySnapshots;
  }

  /**
   * Calculates total percentage of rewards
   *
   * @param {NestedObject} object - An object containing nested data representing percentages for stakers and weekly blocks.
   * @returns {Promise<string[][]>} - A Promise resolving to an array containing formatted data with addresses and their corresponding total Staking percentages.
   */
  sumUpAllPercents(object: NestedObject): string[][] {
    const summedValues = {};

    for (const key in object) {
      const innerDict = object[key];
      for (const address in innerDict as NestedObject) {
        if (!summedValues[innerDict[address][0]]) {
          summedValues[innerDict[address][0]] = new Decimal(0);
        }
        summedValues[innerDict[address][0]] = summedValues[
          innerDict[address][0]
        ].add(innerDict[address][1]);
      }
    }
    const formattedData = Object.entries(summedValues).map(
      ([address, sumValue]) => [
        utils.getAddress(address),
        (sumValue as Decimal).div(7).toFixed(0),
      ],
    );

    return formattedData;
  }

  async bitgetUsersLiquidity(userAddres: string) {
    const joinsAndExits: JoinExits = await this.qqlService.request(
      GET_JOIN_EXITS_PER_ADDRESS,
      {
        where: {
          pool: '0x55d45c15a95abfbbce3c88f90adcd62cd873a2db000200000000000000000005',
          sender: userAddres,
        },
      },
    );
    let total = new Decimal(0);
    // const tenDaysInSeconds = 864000;
    // let startTimestamp = 0;
    for (let i = 0; i < joinsAndExits.joinExits.length; i++) {
      const element = joinsAndExits.joinExits[i];
      // console.log(element);
      if (element.type == 'Join') {
        total = total.add(element.valueUSD);
        // if (startTimestamp == 0) startTimestamp = element.timestamp;
      } else {
        total = total.sub(element.valueUSD);
      }
      // console.log(total.toNumber());
      if (total.toNumber() > 20) {
        return {
          status: 0,
          data: { timestamp: element.timestamp, tx: element.tx },
        };
      }
    }
    return { status: 1, data: {} };
  }

  async weeklyLPThirdPartyRewardsDistributionSnapshot(
    epoch = '0',
    tokenAmount = '0',
    incentivisedPool = [],
    nestedPools = [],
  ) {
    const content =
      await this.weeklyLPThirdPartyRewardsDistributionSnapshotIPFSData(
        epoch,
        tokenAmount,
        incentivisedPool,
        nestedPools,
      );

    if (content) {
      this.logger.debug('start sending merklee tree to the ipfs...');

      const ipfsHash = await this.ipfs.upload(content);
      const returnValue = `ipfsHah: ${ipfsHash}, merkleeTreeRoot: ${content.merkleTreeRoot}`;
      this.logger.debug(returnValue);
      return returnValue;
    }
  }
  async weeklyLPThirdPartyRewardsDistributionSnapshotPost(
    token = '0x0',
    tokenAmount = '0',
    ipfsHash = '',
    merkleTreeRoot = '',
  ) {
    this.logger.debug('call to create Third Party incentives...');
    const createThridPartyDistribution = this.ethersService
      .getLPThirdPartyDistributionSmartContract()
      .createDrop(token, tokenAmount, merkleTreeRoot, ipfsHash);

    this.logger.debug(
      'transaction successfully submitted ' + createThridPartyDistribution.hash,
    );
    const receipt = await createThridPartyDistribution.wait();
    this.logger.debug(
      'transaction accepted by the network ' +
        createThridPartyDistribution.hash,
    );
    return receipt;
  }

  async generateMerkleeTree(tree: string[][]) {
    console.log(tree);
    const treee = [
      ['0x9342a65736a2e9c6a84a2adaba55ad1dc1f3a418', '500000000000000000'],
      ['0xa1Ce0aB959766cEC4d768ECD19bCD53A3BaB2296', '500000000000000000'],
      ['0xdd71c71d7E0806b46E5008C09a000382188842F5', '500000000000000000'],
    ];
    const { content } = this.ipfs.generateIpfsContent(treee, [1], 'Test', '0');

    const ipfsHash = await this.ipfs.upload(content);

    this.logger.debug(
      `ipfsHah: ${ipfsHash}, merkleeTreeRoot: ${content.merkleTreeRoot}`,
    );
  }
  async weeklyLPThirdPartyRewardsDistributionSnapshotIPFSData(
    epoch = '0',
    tokenAmount = '0',
    incentivisedPools: string[] = [],
    nestedPools: string[] = [],
  ) {
    this.logger.debug('get epoch daily block numbers...');
    const weeklyBlockNumbers = [
      (await this.ethersService.getBlockNumber()) - 1000,
    ];
    this.logger.debug('done getting epoch daily block numbers...');
    this.logger.debug('started calculating process...');

    const calculateWeeklyRewardInPercentageInPool =
      await this.officialPoolService.calculateWeeklyLPThirdPartyRewardsDistribution(
        weeklyBlockNumbers,
        incentivisedPools,
        nestedPools,
        tokenAmount,
      );

    this.logger.debug('end calculating process...');

    if (calculateWeeklyRewardInPercentageInPool) {
      this.logger.debug('start generating ipfs content...');
      const { content } = this.ipfs.generateIpfsContent(
        calculateWeeklyRewardInPercentageInPool,
        weeklyBlockNumbers,
        'LP Third Party Reward Distribution',
        epoch,
      );
      // console.log(JSON.stringify(content.merkleTree.values));
      return content;
    } else {
      this.logger.debug('could not generate ipfs content');
    }
  }
}
