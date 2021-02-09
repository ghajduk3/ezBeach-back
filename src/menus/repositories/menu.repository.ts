import {
  AbstractRepository,
  EntityManager,
  EntityRepository,
  Repository,
} from 'typeorm';
import { MenuEntity } from '../entities/menu.entity';
import { createMenuDto, Menu } from '../dto/menu.dto';
import { HttpException } from '@nestjs/common';

@EntityRepository(MenuEntity)
export class MenuRepository extends AbstractRepository<MenuEntity> {
  // async findById(id: number) {
  //   const menu = await this.manager
  //     .createQueryBuilder()
  //     .select('menu')
  //     .from(MenuEntity, 'menu')
  //     .where('menu.id = :id', { id: id })
  //     .getOneOrFail();
  //   return menu;
  // }

  async createAndSave(menu: Menu) {
    const menuEntity: MenuEntity = this.repository.create(menu);
    await this.repository.save(menuEntity);
    return menuEntity;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOne({
      relations: ['categories'],
      where: { id: id },
    });
  }

  async findByRestaurantId(restaurantId: number, language = 'EN') {
    return await this.repository.findOneOrFail({
      relations: ['categories'],
      where: { restaurantId: restaurantId, language: language },
    });
  }

  async deleteById(id:number){
    return await this.repository.delete({ id: id });
  }

  async updateMenyById(id:number,menuDto:Partial<Menu>){
    await this.repository.update({id:id},menuDto);
    return this.findById(id);

  }
}
