import { EntityRepository, Repository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityNotFoundException } from '../../../exceptions/entity-not-found.exception';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { CategoryDto } from '../dto/category.dto';
import { createCategoryDto } from '../dto/createCategoryDto.dto';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends BaseRepository<
  CategoryEntity,
  CategoryDto
> {
  async findById(id: number) {
    let entity;
    try {
      entity = await this.repository.findOne({
        relations: ['items'],
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
}
