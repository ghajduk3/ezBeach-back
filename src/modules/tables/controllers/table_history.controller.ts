import { Controller } from '@nestjs/common';
import { BaseController } from '../../../common/crud/base.controller';
import { TableEntity } from '../entities/table.entity';
import { TableDto } from '../dtos/table.dto';
import { TableService } from '../services/table.service';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableHistoryService } from '../services/table_history.service';

@Controller('table_history')
export class TableHistoryController extends BaseController<TableHistoryEntity, TableHistoryDto> {
  constructor(private readonly tableHistoryService: TableHistoryService) {
    super(tableHistoryService);
  }
}