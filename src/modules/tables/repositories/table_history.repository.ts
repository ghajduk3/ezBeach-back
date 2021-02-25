import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../../common/crud/base.repository';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableEntity } from '../entities/table.entity';
import { TableStatusEntity } from '../entities/table_status.entity';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(TableHistoryEntity)
export class TableHistoryRepository extends BaseRepository<
  TableHistoryDto,
  TableHistoryEntity
> {
  async findByRestaurantTable(
    restaurantId: number,
    tableId: number,
  ): Promise<TableHistoryEntity[]> {
    return new Promise<TableHistoryEntity[]>(async (resolve, reject) => {
      try {
        const entity = await this.manager
          .createQueryBuilder()
          .select(['*'])
          .from(TableHistoryEntity, 'th')
          .leftJoin(TableEntity, 't', 't.id = th.tableId')
          .leftJoin(TableStatusEntity,'ts','th.statusId = ts.id')
          .where('t.restaurantId = :restaurantId', {
            restaurantId: restaurantId,
          })
          .andWhere('th.tableId = :tableId', { tableId: tableId })
          .getRawMany();
        resolve(entity);
      } catch (e) {
        reject(new InternalServerErrorException(e));
      }
    });
  }
}
