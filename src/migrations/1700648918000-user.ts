import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1700648918000 implements MigrationInterface {
  name = 'User1700648918000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "version" integer NOT NULL DEFAULT '1',
                "address" character varying NOT NULL,
                "claimAmount" character varying NOT NULL
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "user"
        `);
  }
}
