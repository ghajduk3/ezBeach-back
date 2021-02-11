import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { Category, createCategoryDto } from '../../dto/category.dto';
import { ItemRepository } from '../../repositories/item.repository';
import { createItemDto, Item } from '../../dto/item.dto';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepo: ItemRepository) {}
  async getAllItems(): Promise<Item[]> {
    return await this.itemRepo.find();
  }

  async createItem(item: createItemDto): Promise<Item> {
    const itemEntity = this.itemRepo.create(item);
    await this.itemRepo.save(itemEntity);
    return itemEntity;
  }



}
