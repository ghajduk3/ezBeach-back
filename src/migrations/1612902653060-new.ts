import {MigrationInterface, QueryRunner} from "typeorm";

export class new1612902653060 implements MigrationInterface {
    name = 'new1612902653060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant_entity" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "lat" double precision, "lon" double precision, "address" character varying NOT NULL, "bck_img_loc" character varying NOT NULL, "logo_loc" character varying NOT NULL, "owner_id" integer NOT NULL DEFAULT '1', "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2b7de454f9d1e995c56c9820208" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "menus" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "language" character(2) NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "restaurantId" integer NOT NULL, CONSTRAINT "PK_3fec3d93327f4538e0cbd4349c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "language" character(2) NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "price" double precision NOT NULL, "currency" character varying NOT NULL DEFAULT 'eur', "categoryId" integer NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "language" character(2) NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "menuId" integer NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "menus" ADD CONSTRAINT "FK_62f6422b138b02c889426a1bf47" FOREIGN KEY ("restaurantId") REFERENCES "restaurant_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE `);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE `);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_8b427254858a7396b5349685454" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE CASCADE ON UPDATE CASCADE `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_8b427254858a7396b5349685454"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`);
        await queryRunner.query(`ALTER TABLE "menus" DROP CONSTRAINT "FK_62f6422b138b02c889426a1bf47"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "menus"`);
        await queryRunner.query(`DROP TABLE "restaurant_entity"`);
    }

}
