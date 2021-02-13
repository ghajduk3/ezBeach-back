import { TableEntity } from '../entities/table.entity';
import { BaseRepository } from '../../../common/crud/base.repository';
import { TableDto } from '../dtos/table.dto';
import { EntityRepository } from 'typeorm';

@EntityRepository(TableEntity)
export class TableRepository extends BaseRepository<TableDto, TableEntity> {}