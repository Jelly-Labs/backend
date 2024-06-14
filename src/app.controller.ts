import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';

import { EthersService } from './modules/ethers/ethers.service';
import { RewardService } from './modules/reward/reward.service';

@Controller()
export class AppController {
  constructor(
    private readonly ethers: EthersService,
    private readonly rewardService: RewardService,
  ) {}

  @Get('/')
  async healthCheck() {
    return 'OK';
  }

  @Get('staking-reward-distribution-snapshot-ipfs-data')
  async getStakingRewardDistributionSnapshotIPFSData(
    @Query() query: { epoch: string; email: string },
  ) {
    this.rewardService.weeklyStakingRewardsDistributionSnapshotIPFSData(
      query.epoch,
      query.email,
    );

    return {
      result: 'success',
      message:
        'Callculated Staking Reward Distribution Snapshot/IPFS Data for epoch: ' +
        query.epoch +
        ', will be sent to your email address: ' +
        query.email,
    };
  }

  @Get('lp-reward-distribution-snapshot-ipfs-data')
  async getLPRewardDistributionSnapshotIPFSData(
    @Query() query: { epoch: string; email: string },
  ) {
    this.rewardService.weeklyLPRewardsDistributionSnapshotIPFSData(
      query.epoch,
      query.email,
    );

    return {
      result: 'success',
      message:
        'Callculated LP Reward Distribution Snapshot/IPFS Data for epoch: ' +
        query.epoch +
        ', will be sent to your email address: ' +
        query.email,
    };
  }

  @Post('daily-snapshot')
  async dailySnapshotPost() {
    const transactionRequest = await this.rewardService.postDailySnapshot();

    return await transactionRequest.wait();
  }

  @Get('epoch-snapshot-blocks')
  async getEpochSnapshotBlocks(@Query() query: { epoch: string }) {
    const result = await this.rewardService.getEpochSnapshots(query.epoch);

    return result;
  }

  @Get('current-epochs')
  async getCurrentEpochs() {
    const stakingEpoch = await this.rewardService.getStakingEpoch();
    const lPEpoch = await this.rewardService.getLPEpoch();

    return { stakingEpoch, lPEpoch };
  }
}
