import {MigrationInterface, QueryRunner} from "typeorm";

export class restaurantsImages1612730450497 implements MigrationInterface {
    name = 'restaurantsImages1612730450497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant_entity" ADD "bck_img_loc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant_entity" ADD "logo_loc" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant_entity" DROP COLUMN "logo_loc"`);
        await queryRunner.query(`ALTER TABLE "restaurant_entity" DROP COLUMN "bck_img_loc"`);
    }

}
