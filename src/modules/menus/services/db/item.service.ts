import { Injectable } from '@nestjs/common';
import { ItemRepository } from '../../repositories/item.repository';
import { ItemEntity } from '../../entities/item.entity';
import { ItemDto } from '../../dto/item.dto';
import { BaseService } from '../../../../common/crud/base.service';

@Injectable()
export class ItemService extends BaseService<ItemEntity, ItemDto> {
  constructor(private readonly itemRepo: ItemRepository) {
    super(itemRepo);
  }


  // async getMenuByRestaurantId(id: number): Promise<MenuEntity> {
  //   const menuEntity = await this.menuRepo.findByRestaurantId(id);
  //   return menuEntity;
  // }
  //
}