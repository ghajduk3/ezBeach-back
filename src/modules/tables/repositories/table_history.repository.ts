import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../../common/crud/base.repository';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';

@EntityRepository(TableHistoryEntity)
export class TableHistoryRepository extends BaseRepository<
  TableHistoryDto,
  TableHistoryEntity
> {}
