import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Ipfs } from './entities/ipfs.entity';
import { IpfsService } from './ipfs.service';

@Module({
  providers: [IpfsService],
  // imports: [TypeOrmModule.forFeature([Ipfs])],
  exports: [IpfsService],
})
export class IpfsModule {}
