import { Controller } from '@nestjs/common';
import { BaseController } from '../../../common/crud/base.controller';
import { MenuEntity } from '../../menus/entities/menu.entity';
import { MenuDto } from '../../menus/dto/menu.dto';
import { MenuService } from '../../menus/services/db/menu.service';
import { TableEntity } from '../entities/table.entity';
import { TableDto } from '../dtos/table.dto';
import { TableService } from '../services/table.service';


@Controller('table')
export class TableController extends BaseController<TableEntity, TableDto> {
  constructor(private readonly tableService: TableService) {
    super(tableService);
  }
}