import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { CategoryEntity } from '../../entities/category.entity';
import { CategoryDto } from '../../dto/category.dto';
import { BaseService } from '../../../../common/crud/base.service';

@Injectable()
export class CategoryService extends BaseService<CategoryEntity, CategoryDto> {
  constructor(private readonly categoryRepo: CategoryRepository) {
    super(categoryRepo);
  }
}