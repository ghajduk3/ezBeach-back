import {
  AbstractRepository,
  EntityManager,
  EntityRepository,
  Repository,
} from 'typeorm';
import { MenuEntity } from '../entities/menu.entity';
import { createMenuDto, Menu, MenuDto } from '../dto/menu.dto';
import { HttpException, HttpService, InternalServerErrorException } from '@nestjs/common';
import { CreateFailedException } from '../../../exceptions/create-failed.exception';
import { EntityNotFoundException } from '../../../exceptions/entity-not-found.exception';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@EntityRepository(MenuEntity)
export class MenuRepository extends AbstractRepository<MenuEntity> {

  async createAndSave(menu: MenuDto):Promise<MenuEntity> {

    try {
      const menuEntity: MenuEntity = this.repository.create(menu);
      await this.repository.save(menuEntity);
      return menuEntity;
    } catch (error){
      throw new CreateFailedException(error);
    }
  }

  async findAll(): Promise<MenuEntity[]> {
    var entities = [];
    try {
      entities = await this.repository.find();
    }
    catch (error) {
      throw new InternalServerErrorException(error);
    }

    if(!entities){
      throw new EntityNotFoundException("There are no available menus");
    }
    return entities;
    }

  async findById(id: number) {
    var entity;
    try {
      entity = await this.repository.findOne({
        relations: ['categories'],
        where: { id: id },
      });
    }catch (error) {
      throw new InternalServerErrorException(error);
    }
      if(!entity){
      throw new EntityNotFoundException(
        'There is no available menu with id : ' + id)
      }
      return entity;

  }

  async findByRestaurantId(restaurantId: number, language = 'EN') {
    var entity;
    try {
      entity = await this.repository.findOne({
        relations: ['categories'],
        where: { restaurantId: restaurantId, language: language },
      });
    }catch (error) {
      throw new InternalServerErrorException(error);
    }
    if(!entity){
      throw new EntityNotFoundException(
        'There is no available menu with RestaurantId : ' + restaurantId + ' and language : ' + language);
    }
    return entity;
  }

  async deleteById(id:number){
    try {
      await this.repository.delete({ id: id });
    } catch (error){
      throw new InternalServerErrorException(error);
    }
  }

  async updateMenyById(id:number,menuDto:Partial<Menu>){


    try {
      await this.repository.update({ id: id }, menuDto);
    } catch (error){
      throw new InternalServerErrorException(error);
    }

  }
}
