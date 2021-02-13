import { Injectable } from '@nestjs/common';
import { MenuEntity } from '../../entities/menu.entity';
import { BaseService } from '../../../../common/crud/base.service';
import { MenuDto } from '../../dto/menu.dto';
import { MenuRepository } from '../../repositories/menu.repository';

@Injectable()
export class MenuService extends BaseService<MenuEntity, MenuDto> {
  constructor(private readonly menuRepo: MenuRepository) {
    super(menuRepo);
  }


  // async getMenuByRestaurantId(id: number): Promise<MenuEntity> {
  //   const menuEntity = await this.menuRepo.findByRestaurantId(id);
  //   return menuEntity;
  // }
  //
}
