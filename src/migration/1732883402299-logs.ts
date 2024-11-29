import { MigrationInterface, QueryRunner } from "typeorm";

export class Logs1732883402299 implements MigrationInterface {
    name = 'Logs1732883402299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "timeStamp" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "message" jsonb NOT NULL, CONSTRAINT "PK_69e142ffa0889d451f768edce3e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Logs"`);
    }

}
