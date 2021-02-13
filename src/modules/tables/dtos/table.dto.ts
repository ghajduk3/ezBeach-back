import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { TableEntity } from '../entities/table.entity';

export class TableDto extends AbstractDto {
  id?: number;
  table_name: string;
  restaurantId: number;
  status : string;

  constructor(tableEntity: TableEntity) {
    super();
    this.id = tableEntity.id;
    this.table_name = tableEntity.table_name;
    this.restaurantId = tableEntity.restaurantId;
    this
  }
}
