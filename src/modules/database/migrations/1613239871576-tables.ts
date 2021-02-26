import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1613239871576 implements MigrationInterface {
    name = 'tables1613239871576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tables" ("id" SERIAL NOT NULL, "table_name" character varying NOT NULL, "restaurantId" integer NOT NULL, CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table_status" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_3975c0a2d87878ba2eb7318e75a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table_history" ("id" SERIAL NOT NULL, "set_by" integer NOT NULL, "set_at" TIMESTAMP NOT NULL DEFAULT now(), "tableId" integer NOT NULL, "statusId" integer NOT NULL, CONSTRAINT "PK_fe62b4595501189a33693a5ed40" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tables" ADD CONSTRAINT "FK_94e0a6541322cecd437cd841701" FOREIGN KEY ("restaurantId") REFERENCES "restaurant_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "table_history" ADD CONSTRAINT "FK_d86f2c36056e81307fb449fc98a" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "table_history" ADD CONSTRAINT "FK_b9014ffd5293aeae40ca36dad21" FOREIGN KEY ("statusId") REFERENCES "table_status"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "table_history" DROP CONSTRAINT "FK_b9014ffd5293aeae40ca36dad21"`);
        await queryRunner.query(`ALTER TABLE "table_history" DROP CONSTRAINT "FK_d86f2c36056e81307fb449fc98a"`);
        await queryRunner.query(`ALTER TABLE "tables" DROP CONSTRAINT "FK_94e0a6541322cecd437cd841701"`);
        await queryRunner.query(`DROP TABLE "table_history"`);
        await queryRunner.query(`DROP TABLE "table_status"`);
        await queryRunner.query(`DROP TABLE "tables"`);
    }

}
