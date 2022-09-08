"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentInfo1661171933319 = void 0;
class createPaymentInfo1661171933319 {
    constructor() {
        this.name = 'createPaymentInfo1661171933319';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "payment_infos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(45) NOT NULL, "number" character varying(16) NOT NULL, "dueDate" date NOT NULL, "code" character varying(3) NOT NULL, CONSTRAINT "PK_ccb7464329b1faa3eed32b3ab1b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "paymentInfoId" uuid`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_8cd3b57fedc2bc5eccd61ee2409" UNIQUE ("paymentInfoId")`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409" FOREIGN KEY ("paymentInfoId") REFERENCES "payment_infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8cd3b57fedc2bc5eccd61ee2409"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_8cd3b57fedc2bc5eccd61ee2409"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "paymentInfoId"`);
            yield queryRunner.query(`DROP TABLE "payment_infos"`);
        });
    }
}
exports.createPaymentInfo1661171933319 = createPaymentInfo1661171933319;
