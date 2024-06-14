/** This file exports a datasource for use in the TypeORM CLI. */
import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppModule } from '../app.module';
import { DbService } from './db.service';

async function buildDataSource() {
  const app = await NestFactory.create(AppModule);
  const dbService = app.get(DbService);

  const dataSource = new DataSource(await dbService.getDataSourceOptions());
  return dataSource;
}

// ts-prune-ignore-next
export default buildDataSource();
