import {MigrationInterface, QueryRunner} from "typeorm";

export class restaurants1612710293082 implements MigrationInterface {
    name = 'restaurants1612710293082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant_entity" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "lat" double precision, "lon" double precision, "address" character varying NOT NULL, "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2b7de454f9d1e995c56c9820208" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "restaurant_entity"`);
    }

}
