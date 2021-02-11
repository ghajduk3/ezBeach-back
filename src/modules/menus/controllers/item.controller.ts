import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CategoryService } from '../services/db/category.service';
import { Category, createCategoryDto } from '../dto/category.dto';
import { ItemService } from '../services/db/item.service';
import { createItemDto, Item } from '../dto/item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAllItems(@Req() req: any): Promise<Item[]> {
    return await this.itemService.getAllItems();
  }

  @Post()
  async createItem(
    @Req() req: any,
    @Body() itemDto: createItemDto,
  ): Promise<Item> {
    return await this.itemService.createItem(itemDto);
  }
}
