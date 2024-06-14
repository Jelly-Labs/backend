import { Module } from '@nestjs/common';
import { QqlService } from './qql.service';

@Module({
  controllers: [],
  providers: [QqlService],
  exports: [QqlService],
})
export class QqlModule {}
