import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../../repositories/menu.repository';
import { createMenuDto, Menu } from '../../dto/menu.dto';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepo: MenuRepository) {}
  async getAllMenus(): Promise<Menu[]> {
    return await this.menuRepo.find();
  }

  async createMenu(menu: createMenuDto): Promise<Menu> {
    const menuEntity = this.menuRepo.create(menu);
    await this.menuRepo.save(menuEntity);
    return menuEntity;
  }
}
