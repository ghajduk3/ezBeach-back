import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../../repositories/menu.repository';
import { createMenuDto, Menu } from '../../dto/menu.dto';
import { tsTsxJsJsxRegex } from 'ts-loader/dist/constants';
import { MenuEntity } from '../../entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepo: MenuRepository) {}

  async getAllMenus(): Promise<MenuEntity[]> {
    return await this.menuRepo.findAll();
  }

  async createMenu(menu: createMenuDto): Promise<MenuEntity> {
    return this.menuRepo.createAndSave(menu);
    // const menuEntity = this.menuRepo.create(menu);
    // await this.menuRepo.save(menuEntity);
    // return menuEntity;
  }

  async getMenuById(id: number): Promise<MenuEntity> {
    const menuEntity = await this.menuRepo.findById(id);
    return menuEntity;
  }
  async getMenuByRestaurantId(id: number): Promise<MenuEntity> {
    const menuEntity = await this.menuRepo.findByRestaurantId(id);
    return menuEntity;
  }

  async deleteMenuById(id:number){
    await this.menuRepo.deleteById(id);
  }

  async updateMenuById(id:number,menuDto:Partial<MenuEntity>){
    return await this.menuRepo.updateMenyById(id, menuDto);
  }
}
