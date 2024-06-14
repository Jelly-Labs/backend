import { Module } from '@nestjs/common';
import { RewardModule } from '../reward/reward.module';
import { CronjobsService } from './cronjobs.service';

@Module({
  imports: [RewardModule],
  providers: [CronjobsService],
})
export class CronjobsModule {}
