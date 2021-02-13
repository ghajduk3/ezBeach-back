import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { TableHistoryEntity } from '../entities/table_history.entity';

export class TableHistoryDto extends AbstractDto{
  id? : number;
  set_at: Date;
  set_by: number;
  tableId : number;
  statusId: number;
  status?: string;

  constructor(tableHistEnt : TableHistoryEntity) {
    super();
    this.id = tableHistEnt.id;
    this.set_at = tableHistEnt.set_at;
    this.set_by = tableHistEnt.set_by;
    this.tableId = tableHistEnt.tableId;
    this.statusId = tableHistEnt.statusId;
    this.status = tableHistEnt.status;
  }



}