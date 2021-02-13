import { EntityRepository } from 'typeorm';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { BaseRepository } from '../../../common/crud/base.repository';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableStatusEntity } from '../entities/table_status.entity';
import { TableStatusDto } from '../dtos/table_status.dto';

@EntityRepository(TableStatusEntity)
export class TableStatusRepository extends BaseRepository<
  TableStatusDto,
  TableStatusEntity
  > {}
