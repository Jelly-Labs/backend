import { Module } from '@nestjs/common';
import { EthersModule } from '../ethers/ethers.module';
import { OfficialPoolService } from './official-pool.service';
import { QqlModule } from '../qql/qql.module';

@Module({
  controllers: [],
  imports: [EthersModule, QqlModule],
  providers: [OfficialPoolService],
  exports: [OfficialPoolService],
})
export class OfficialPoolModule {}
