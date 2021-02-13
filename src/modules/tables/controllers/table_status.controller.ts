import { Controller } from '@nestjs/common';
import { BaseController } from '../../../common/crud/base.controller';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableHistoryService } from '../services/table_history.service';
import { TableStatusEntity } from '../entities/table_status.entity';
import { TableStatusDto } from '../dtos/table_status.dto';
import { TableStatusService } from '../services/table_status.service';

@Controller('table_status')
export class TableStatusController extends BaseController<
  TableStatusEntity,
  TableStatusDto
> {
  constructor(private readonly tableStatusService: TableStatusService) {
    super(tableStatusService);
  }
}
