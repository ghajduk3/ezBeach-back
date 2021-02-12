import { EntityRepository, Repository } from 'typeorm';
import { ItemEntity } from '../entities/item.entity';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { ItemDto } from '../dto/item.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityNotFoundException } from '../../../exceptions/entity-not-found.exception';
import { createItemDto } from '../dto/createItemDto.dto';

@EntityRepository(ItemEntity)
export class ItemRepository extends BaseRepository<ItemEntity, ItemDto> {
  async findById(id: number) {
    let entity;
    try {
      entity = await this.repository.findOne({
        where: { id: id },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (!entity) {
      throw new EntityNotFoundException(
        'There is no available menu with id : ' + id,
      );
    }
    return entity;
  }
  async deleteById(id: number) {
    try {
      await this.repository.delete({ id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateById(id: number, dto: Partial<ItemDto>) {
    try {
      await this.repository.update({ id }, dto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
