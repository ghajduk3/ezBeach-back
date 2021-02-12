import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { CategoryEntity } from '../../entities/category.entity';
import { CategoryDto } from '../../dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}
  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.categoryRepo.findAll();
  }

  async createCategory(categoryDto: CategoryDto): Promise<CategoryEntity> {
    return await this.categoryRepo.createAndSave(categoryDto);
  }
}
