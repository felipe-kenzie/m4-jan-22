import { MigrationInterface, QueryRunner } from "typeorm";

export class createPaymentInfo1661171933319 implements MigrationInterface {
    name = 'createPaymentInfo1661171933319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment_infos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(45) NOT NULL, "number" character varying(16) NOT NULL, "dueDate" date NOT NULL, "code" character varying(3) NOT NULL, CONSTRAINT "PK_ccb7464329b1faa3eed32b3ab1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "paymentInfoId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_8cd3b57fedc2bc5eccd61ee2409" UNIQUE ("paymentInfoId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409" FOREIGN KEY ("paymentInfoId") REFERENCES "payment_infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_8cd3b57fedc2bc5eccd61ee2409"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "paymentInfoId"`);
        await queryRunner.query(`DROP TABLE "payment_infos"`);
    }

}
