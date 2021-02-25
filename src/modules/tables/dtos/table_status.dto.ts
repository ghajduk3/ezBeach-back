import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { TableStatusEntity } from '../entities/table_status.entity';

export class TableStatusDto extends AbstractDto {
  id?: number;
  status: string;

  constructor(tableStatusEnt: TableStatusEntity) {
    super();
    this.id = tableStatusEnt.id;
    this.status = tableStatusEnt.status;
  }
}
