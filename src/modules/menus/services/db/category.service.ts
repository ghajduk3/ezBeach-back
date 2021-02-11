import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/category.repository';
import { Category, createCategoryDto } from '../../dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepo.find();
  }

  async createCategory(menu: createCategoryDto): Promise<Category> {
    const categoryEntity = this.categoryRepo.create(menu);
    await this.categoryRepo.save(categoryEntity);
    return categoryEntity;
  }
}
