import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { TableStatusEntity } from '../../tables/entities/table_status.entity';

export class TableStatusSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log('U seederu smo');
    await connection.query('truncate table table_status cascade');
    await connection.query(
      "insert into table_status (status) values ('OCCUPIED'),('FREE'),('CALLED')",
    );
  }
}
