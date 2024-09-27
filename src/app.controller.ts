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

  @Get('bitget-liquidity-check')
  async getBitgetLiquidity(@Query() query: { address: string }) {
    try {
      const bitgetCampaignLiquidityLimit = 1;
      const result = await this.rewardService.checkUserLiquidity(
        query.address.toLowerCase(),
        bitgetCampaignLiquidityLimit,
      );

      return result;
    } catch {
      return { status: 1, data: {}, message: 'Error' };
    }
  }

  @Get('okx-liquidity-check')
  async getOkxLiquidity(@Query() query: { address: string }) {
    try {
      const okxCampaignLiquidityLimit = 1;
      const result = await this.rewardService.checkUserLiquidity(
        query.address.toLowerCase(),
        okxCampaignLiquidityLimit,
      );

      return { code: 0, data: !result.status };
    } catch {
      return { code: 0, data: false };
    }
  }

  @Get('current-epochs')
  async getCurrentEpochs() {
    const stakingEpoch = await this.rewardService.getStakingEpoch();
    const lPEpoch = await this.rewardService.getLPEpoch();

    return { stakingEpoch, lPEpoch };
  }

  @Post('partners-reward-distribution-snapshot')
  async postPartnersRewardDistributionSnapshot(
    @Body()
    body: {
      epoch: string;
      dropId: string;
      amount: string;
      incentivisedPools: string[];
      nestedPools: string[];
    },
  ) {
    console.log(`epoch = ${body.epoch}`);
    console.log(`dropId = ${body.dropId}`);
    console.log(`amount = ${body.amount}`);
    console.log(`incentivisedPools = ${body.incentivisedPools}`);
    console.log(`nestedPools = ${body.nestedPools}`);

    const result =
      await this.rewardService.weeklyLPThirdPartyRewardsDistributionSnapshot(
        body.epoch,
        body.dropId,
        body.amount,
        body.incentivisedPools,
        body.nestedPools,
      );

    return result;
  }

  @Post('partners-reward-distribution-snapshot-post')
  async postPartnersRewardDistributionSnapshotPost(
    @Body()
    body: {
      ipfsHash: string;
      token: string;
      amount: string;
      merkleTreeRoot: string;
      dropId: string;
    },
  ) {
    const result =
      await this.rewardService.weeklyLPThirdPartyRewardsDistributionSnapshotPost(
        body.token,
        body.amount,
        body.ipfsHash,
        body.merkleTreeRoot,
        body.dropId,
      );

    return result;
  }
  @Post('lp-reward-distribution-snapshot')
  async getLPRewardDistributionSnapshot(
    @Body() body: { epoch: string; lpRewardContractAddress: string },
  ) {
    const result = await this.rewardService.weeklyLPRewardsDistributionSnapshot(
      body.epoch,
    );

    return result;
  }

  @Post('staking-reward-distribution-snapshot')
  async postStakingRewardDistributionSnapshot(@Body() body: { epoch: string }) {
    const result =
      await this.rewardService.weeklyStakingRewardsDistributionSnapshot(
        body.epoch,
      );

    return result;
  }

  @Post('lp-reward-distribution-snapshot-post')
  async getLPRewardDistributionSnapshotPost(
    @Body()
    body: {
      merkleTreeRoot: string;
      ipfsHash: string;
      description: string;
    },
  ) {
    const result =
      await this.rewardService.weeklyLPRewardsDistributionSnapshotPost(
        body.merkleTreeRoot,
        body.ipfsHash,
        body.description,
      );

    return result;
  }

  @Post('staking-reward-distribution-snapshot-post')
  async postStakingRewardDistributionSnapshotPost(
    @Body()
    body: {
      merkleTreeRoot: string;
      ipfsHash: string;
      description: string;
    },
  ) {
    const result =
      await this.rewardService.weeklyStakingRewardsDistributionSnapshotPost(
        body.merkleTreeRoot,
        body.ipfsHash,
        body.description,
      );

    return result;
  }
}
