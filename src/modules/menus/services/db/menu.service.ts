import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../../repositories/menu.repository';
import { MenuEntity } from '../../entities/menu.entity';
import { createMenuDto } from '../../dto/createMenuDto.dto';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepo: MenuRepository
  ) {

  }

  async getAllMenus(): Promise<MenuEntity[]> {
    return await this.menuRepo.findAll();
  }

  async createMenu(menu: createMenuDto): Promise<MenuEntity> {
    return this.menuRepo.createAndSave(menu);
  }

  async getMenuById(id: number): Promise<MenuEntity> {
    const menuEntity = await this.menuRepo.findById(id);
    return menuEntity;
  }
  async getMenuByRestaurantId(id: number): Promise<MenuEntity> {
    const menuEntity = await this.menuRepo.findByRestaurantId(id);
    return menuEntity;
  }

  async deleteMenuById(id: number) {
    await this.menuRepo.deleteById(id);
  }

  async updateMenuById(id: number, menuDto: Partial<MenuEntity>) {
    return await this.menuRepo.updateById(id, menuDto);
  }
}
