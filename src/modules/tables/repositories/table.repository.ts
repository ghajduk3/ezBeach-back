import { TableEntity } from '../entities/table.entity';
import { BaseRepository } from '../../../common/crud/base.repository';
import { Table, TableDto } from '../dtos/table.dto';
import { EntityRepository } from 'typeorm';
import { TableHistoryEntity } from '../entities/table_history.entity';
import { TableStatusEntity } from '../entities/table_status.entity';
import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import set = Reflect.set;
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { EntityNotFoundException } from '../../../exceptions/entity-not-found.exception';

@EntityRepository(TableEntity)
export class TableRepository extends BaseRepository<TableDto, TableEntity> {
  async findAll(): Promise<TableEntity[]> {
    return new Promise<TableEntity[]>(async (resolve, reject) => {
      try {
        const entities = await this.manager.query(
          'select t.id,t.table_name ,th.set_at, th.set_by, ts.status\n' +
            'from tables t\n' +
            'left join table_history th on t.id = th."tableId"\n' +
            'left join table_status ts on th."statusId" = ts.id\n' +
            'where th.set_at in (\n' +
            '    select max(h.set_at)\n' +
            '    from tables tt\n' +
            '    left join table_history h on tt.id = h."tableId"\n' +
            '    group by tt.id\n' +
            '    )',
        );
        resolve(entities);
      } catch (e) {
        reject(new InternalServerErrorException(e));
      }
    });
  }
  async findById(id: number): Promise<TableEntity> {
    return new Promise<TableEntity>(async (resolve, reject) => {
      try {
        const entity = await this.manager
          .createQueryBuilder()
          .select([
            'table.id as id',
            'table.table_name as table_name',
            'table.restaurantId as restaurantId',
            'th.set_by as set_by',
            'ts.status as status',
          ])
          .from(TableEntity, 'table')
          .leftJoin(TableHistoryEntity, 'th', 'table.id = th.tableId')
          .leftJoin(TableStatusEntity, 'ts', 'th.statusId = ts.id')
          .where('table.id = :id', { id: id })
          .orderBy('th.set_at', 'DESC')
          .limit(1)
          .getRawOne();
        resolve(entity);
      } catch (e) {
        if (e instanceof EntityNotFoundError) {
          reject(
            new EntityNotFoundException(
              'There is no available entity with id : ' + id,
            ),
          );
        } else {
          reject(new InternalServerErrorException(e));
        }
      }
    });
  }

  createEntity(dto: TableDto): Promise<TableEntity> {
    return new Promise<TableEntity>(async (resolve, reject) => {
      try {
        const table_status_id = await this._getStatusId(dto.status);
        const tableEntity = await this.repository.save(dto);
        await this._createTableHistory(
          tableEntity.id,
          table_status_id,
          dto.set_by,
        );
        resolve(tableEntity);
      } catch (e) {
        reject(e);
      }
    });
  }

  async updateById(id: number, dto: Partial<TableDto>): Promise<TableEntity> {
    return new Promise<TableEntity>(async (resolve, reject) => {
      console.log(dto);
      try {
        const table_status_id = await this._getStatusId(dto.status);
        const { table_name, restaurantId, ...rest } = dto;
        console.log(table_name, restaurantId);

        await this.repository.update(id, {
          table_name: table_name,
          restaurantId: restaurantId,
        });
        this._createTableHistory(id, table_status_id, dto.set_by);
        resolve(this.findById(id));
      } catch (e) {
        reject(e);
      }
    });
  }

  private async _getStatusId(status: string): Promise<number> {
    return new Promise<number>(async (resolve, reject) => {
      try {
        const table_status = await this.manager
          .createQueryBuilder()
          .select(['ts.id as statusId'])
          .from(TableStatusEntity, 'ts')
          .where('ts.status = :status', { status: status })
          .getRawOne();
        if (!table_status) {
          reject(
            new HttpException(
              'Entered table status is not supported ',
              HttpStatus.BAD_REQUEST,
            ),
          );
        }
        resolve(table_status.statusid);
      } catch (e) {
        reject(new InternalServerErrorException(e));
      }
    });
  }

  private async _createTableHistory(
    tableId: number,
    statusId: number,
    set_by: number,
  ) {
    try {
      await this.manager
        .createQueryBuilder()
        .insert()
        .into(TableHistoryEntity)
        .values([{ set_by: set_by, tableId: tableId, statusId: statusId }])
        .execute();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
