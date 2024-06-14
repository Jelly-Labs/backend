import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './app_config/app_config.module';
import { TYPEORM_MODULE_OPTIONS } from './db/db.module';
import { CronjobsModule } from './modules/cronjobs/cronjobs.module';
import { EthersService } from './modules/ethers/ethers.service';
import { IpfsModule } from './modules/ipfs/ipfs.module';
import { OfficialPoolModule } from './modules/official-pool/official-pool.module';
import { QqlModule } from './modules/qql/qql.module';
import { RewardModule } from './modules/reward/reward.module';
import { RewardService } from './modules/reward/reward.service';
import { SesModule } from './modules/ses/ses.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    CronjobsModule,
    IpfsModule,
    AppConfigModule,
    RewardModule,
    OfficialPoolModule,
    QqlModule,
    SesModule,
  ],
  controllers: [AppController],
  providers: [AppService, EthersService, RewardService],
})
export class AppModule {}
