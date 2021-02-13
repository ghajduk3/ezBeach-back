import { EntityRepository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryDto } from '../dto/category.dto';
import { BaseRepository } from '../../../common/crud/base.repository';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends BaseRepository<
  CategoryDto,
  CategoryEntity
> {}
