import {MigrationInterface, QueryRunner} from "typeorm";

export class restaurantOwner1612866133517 implements MigrationInterface {
    name = 'restaurantOwner1612866133517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant_entity" ADD "owner_id" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant_entity" DROP COLUMN "owner_id"`);
    }

}
