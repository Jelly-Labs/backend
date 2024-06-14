import { Module } from '@nestjs/common';

import { IpfsModule } from '../ipfs/ipfs.module';
import { EthersService } from './ethers.service';

@Module({
  imports: [IpfsModule],
  providers: [EthersService],
  exports: [EthersService],
})
export class EthersModule {}
