import { Injectable } from '@nestjs/common';
import { ItemRepository } from '../../repositories/item.repository';
import { ItemEntity } from '../../entities/item.entity';
import { ItemDto } from '../../dto/item.dto';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepo: ItemRepository) {}
  async getAllItems(): Promise<ItemEntity[]> {
    return await this.itemRepo.findAll();
  }

  async createItem(item: ItemDto): Promise<ItemEntity> {
    return await this.itemRepo.createAndSave(item);
  }



}
