import { Injectable } from '@nestjs/common';

import { MenuEntity } from '../../entities/menu.entity';
import { createMenuDto } from '../../dto/createMenuDto.dto';
import { BaseService } from '../../../../common/crud/base.service';
import { MenuDto } from '../../dto/menu.dto';
import { MenuRepository } from '../../repositories/menu.repository';

@Injectable()
export class MenuService extends BaseService<MenuEntity, MenuDto> {
  constructor(private readonly menuRepo: MenuRepository) {
    super(menuRepo);
  }

  // async getAllMenus(): Promise<MenuEntity[]> {
  //   return await this.menuRepo.findAll();
  // }
  //
  // async createMenu(menu: createMenuDto): Promise<MenuEntity> {
  //   return this.menuRepo.createAndSave(menu);
  // }
  //
  // async getMenuById(id: number): Promise<MenuEntity> {
  //   const menuEntity = await this.menuRepo.findById(id);
  //   return menuEntity;
  // }
  // async getMenuByRestaurantId(id: number): Promise<MenuEntity> {
  //   const menuEntity = await this.menuRepo.findByRestaurantId(id);
  //   return menuEntity;
  // }
  //
  // async deleteMenuById(id: number) {
  //   await this.menuRepo.deleteById(id);
  // }
  //
  // async updateMenuById(id: number, menuDto: Partial<MenuEntity>) {
  //   return await this.menuRepo.updateById(id, menuDto);
  // }
}
