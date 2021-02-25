import {MigrationInterface, QueryRunner} from "typeorm";

export class addedCascadeRules1612903354138 implements MigrationInterface {
    name = 'addedCascadeRules1612903354138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menus" DROP CONSTRAINT "FK_62f6422b138b02c889426a1bf47"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_8b427254858a7396b5349685454"`);
        await queryRunner.query(`ALTER TABLE "menus" ADD CONSTRAINT "FK_62f6422b138b02c889426a1bf47" FOREIGN KEY ("restaurantId") REFERENCES "restaurant_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_8b427254858a7396b5349685454" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_8b427254858a7396b5349685454"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`);
        await queryRunner.query(`ALTER TABLE "menus" DROP CONSTRAINT "FK_62f6422b138b02c889426a1bf47"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_8b427254858a7396b5349685454" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menus" ADD CONSTRAINT "FK_62f6422b138b02c889426a1bf47" FOREIGN KEY ("restaurantId") REFERENCES "restaurant_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
