import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { RewardService } from '../reward/reward.service';

@Injectable()
export class CronjobsService {
  private readonly logger = new Logger(CronjobsService.name);

  constructor(private readonly rewardService: RewardService) {}

  @Cron('29 14 * * *') // every day at 2:29 PM
  async dailyReward() {
    this.logger.debug('Running daily reward cron');
    try {
      await this.rewardService.postDailySnapshot();
      this.logger.debug('daily reward cron finished');
    } catch (error) {
      this.logger.error('daily reward cron failed: ' + error);
    }
  }

  @Cron('30 14 * * 2') // every Tuesday at 2:30 PM
  async weeklyMinter() {
    this.logger.debug('Running weekly Jelly inflation reward cron');
    try {
      await this.rewardService.mintWeeklyJellyInflation();
      this.logger.debug('weekly Jelly inflation reward cron finished');
    } catch (error) {
      this.logger.error('weekly Jelly inflation reward cron failed: ' + error);
    }
  }

  @Cron('0 15 * * 2') // every Tuesday at 3:00 PM
  async weeklyLPReward() {
    this.logger.debug('Running weekly LP reward cron');
    try {
      const epoch = await this.rewardService.getLPEpoch();
      await this.rewardService.weeklyLPRewardsDistributionSnapshotPost(epoch);
      this.logger.debug('weekly LP reward cron finished');
    } catch (error) {
      this.logger.error('weekly LP reward cron failed: ' + error);
    }
  }

  @Cron('45 14 * * 2') // every Tuesday at 2:45 PMs
  async weeklyStakingReward() {
    this.logger.debug('Running weekly staking reward cron');
    try {
      const epoch = await this.rewardService.getStakingEpoch();
      await this.rewardService.weeklyStakingRewardsDistributionSnapshotPost(
        epoch,
      );
      this.logger.debug('weekly staking reward cron finished');
    } catch (error) {
      this.logger.error('weekly staking reward cron failed: ' + error);
    }
  }
}
