import { Module } from '@nestjs/common';
import { SesService } from './ses.service';

@Module({
  controllers: [],
  providers: [SesService],
  exports: [SesService],
})
export class SesModule {}
