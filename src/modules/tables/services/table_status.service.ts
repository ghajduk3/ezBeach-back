import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../common/crud/base.service';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableHistoryRepository } from '../repositories/table_history.repository';
import { TableStatusEntity } from '../entities/table_status.entity';
import { TableStatusDto } from '../dtos/table_status.dto';
import { TableStatusRepository } from '../repositories/table_status.repository';

@Injectable()
export class TableStatusService extends BaseService<
  TableStatusEntity,
  TableStatusDto
  > {
  constructor(private readonly tableStatusRepo: TableStatusRepository) {
    super(tableStatusRepo);
  }
}