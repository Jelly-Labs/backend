import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import { AppConfigService } from '../app_config/app_config.service';

@Injectable()
export class DbService {
  constructor(private readonly appConfigService: AppConfigService) {}

  public async getDataSourceOptions(): Promise<PostgresConnectionOptions> {
    return {
      type: 'postgres',
      useUTC: true,
      logging: ['warn', 'error'],
      entities: [join(__dirname, '../', '**', '*.entity.{ts,js}')],
      migrations: [join(__dirname, '..', 'migrations/*.{ts,js}')],
      synchronize: false,
      migrationsRun: true,
    };
  }
}
