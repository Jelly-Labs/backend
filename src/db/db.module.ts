import { Module } from '@nestjs/common';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DbService } from './db.service';

@Module({
  imports: [],
  providers: [DbService],
  exports: [DbService],
})
class DbModule {}

export const TYPEORM_MODULE_OPTIONS: TypeOrmModuleAsyncOptions = {
  imports: [DbModule, ],
  inject: [DbService],
  useFactory: async (dbService: DbService) =>
    await dbService.getDataSourceOptions(),
};
