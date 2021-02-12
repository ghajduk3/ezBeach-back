import { Body, Controller, Get, Post, Req } from '@nestjs/common';

import { ItemService } from '../services/db/item.service';
import { ItemDto } from '../dto/item.dto';


@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAllItems(@Req() req: any): Promise<ItemDto[]> {
    const items = await this.itemService.getAllItems();
    return items.map((item) => item.toDto());
  }

  @Post()
  async createItem(
    @Req() req: any,
    @Body() itemDto: ItemDto,
  ): Promise<ItemDto> {
    const item = await this.itemService.createItem(itemDto);
    return item.toDto();
  }
}
