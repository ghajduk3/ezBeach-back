import { AbstractRepository, EntityRepository } from 'typeorm';
import { MenuEntity } from '../../modules/menus/entities/menu.entity';
import { MenuDto } from '../../modules/menus/dto/menu.dto';
import { CreateFailedException } from '../../exceptions/create-failed.exception';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityNotFoundException } from '../../exceptions/entity-not-found.exception';

export class BaseRepository<E, T> extends AbstractRepository<E> {
  async createAndSave(dto: T): Promise<E> {
    try {
      const entity: E = this.repository.create(dto);
      await this.repository.save(entity);
      return entity;
    } catch (error) {
      throw new CreateFailedException(error);
    }
  }

  async findAll(): Promise<E[]> {
    let entities = [];
    try {
      entities = await this.repository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!entities) {
      throw new EntityNotFoundException('Entities not found');
    }
    return entities;
  }



}
