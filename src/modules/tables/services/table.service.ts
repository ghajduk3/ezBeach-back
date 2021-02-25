import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../common/crud/base.service';
import { MenuEntity } from '../../menus/entities/menu.entity';
import { MenuDto } from '../../menus/dto/menu.dto';
import { MenuRepository } from '../../menus/repositories/menu.repository';
import { TableEntity } from '../entities/table.entity';
import { TableDto } from '../dtos/table.dto';
import { TableRepository } from '../repositories/table.repository';

@Injectable()
export class TableService extends BaseService<TableEntity, TableDto> {
  constructor(private readonly tableRepo: TableRepository) {
    super(tableRepo);
  }
  get(id: number): Promise<TableEntity> {
    return this.tableRepo.findById(id);
  }
}