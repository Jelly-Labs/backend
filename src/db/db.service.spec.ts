import { beforeEach, describe, expect, it } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import { GLOBAL_TEST_IMPORTS } from '../testing/test.module';
import { DbService } from './db.service';

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

describe('DbService', () => {
  let service: DbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: GLOBAL_TEST_IMPORTS,
    }).compile();

    service = module.get<DbService>(DbService);
  });

  it('should return config as described in .env file', async () => {
    // Entities and migrations are specified by a relative path, made absolute at runtime.
    // So ignore them here
    const options =
      (await service.getDataSourceOptions()) as Mutable<PostgresConnectionOptions>;
    delete options.entities;
    delete options.migrations;
    expect(options).toEqual({
      type: 'postgres',
      host: 'localhost',
      port: '5432',
      username: 'backend',
      // deepcode ignore NoHardcodedPasswords: test password only
      password: 'postgres',
      database: 'bg_test',
      useUTC: true,
      synchronize: false,
      logging: ['warn', 'error'],
      migrationsRun: true,
    });
  });
});
