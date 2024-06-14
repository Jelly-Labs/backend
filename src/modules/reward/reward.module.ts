import { Module } from '@nestjs/common';
import { EthersModule } from '../ethers/ethers.module';
import { IpfsModule } from '../ipfs/ipfs.module';
import { OfficialPoolModule } from '../official-pool/official-pool.module';
import { QqlModule } from '../qql/qql.module';
import { RewardService } from './reward.service';
import { SesModule } from '../ses/ses.module';

@Module({
  imports: [IpfsModule, EthersModule, OfficialPoolModule, QqlModule, SesModule],
  providers: [RewardService],
  exports: [RewardService],
})
export class RewardModule {}
