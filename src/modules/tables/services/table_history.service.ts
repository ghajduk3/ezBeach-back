import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../common/crud/base.service';
import { TableEntity } from '../entities/table.entity';
import { TableDto } from '../dtos/table.dto';
import { TableRepository } from '../repositories/table.repository';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableHistoryRepository } from '../repositories/table_history.repository';

@Injectable()
export class TableHistoryService extends BaseService<
  TableHistoryEntity,
  TableHistoryDto
> {
  constructor(private readonly tableHistoryRepo: TableHistoryRepository) {
    super(tableHistoryRepo);
  }
}
