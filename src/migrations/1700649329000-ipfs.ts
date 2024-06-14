import { MigrationInterface, QueryRunner } from 'typeorm';

export class Ipfs1700649329000 implements MigrationInterface {
  name = 'Ipfs1700649329000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "ipfs" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "version" integer NOT NULL DEFAULT '1',
                "hash" character varying NOT NULL
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "ipfs"
        `);
  }
}
