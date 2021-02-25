import { Controller } from '@nestjs/common';

import { ItemService } from '../services/db/item.service';
import { ItemDto } from '../dto/item.dto';
import { BaseController } from '../../../common/crud/base.controller';
import { ItemEntity } from '../entities/item.entity';


@Controller('item')
export class ItemController extends BaseController<ItemEntity, ItemDto> {
  constructor(private readonly itemService: ItemService) {
    super(itemService);
  }
}