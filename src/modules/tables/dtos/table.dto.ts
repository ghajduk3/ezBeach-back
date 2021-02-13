import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { TableEntity } from '../entities/table.entity';

export class TableDto extends AbstractDto {
  id?: number;
  table_name: string;
  restaurantId: number;
  status? : string;
  set_by : number;

  constructor(tableEntity: TableEntity) {
    super();
    this.id = tableEntity.id;
    this.table_name = tableEntity.table_name;
    this.restaurantId = tableEntity.restaurantId;
    this.status = tableEntity.status;
  }
}

export interface Table{
  id?: number;
  table_name: string;
  restaurantId: number;
  status? : string;
}