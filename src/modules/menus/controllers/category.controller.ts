import { Controller } from '@nestjs/common';
import { CategoryService } from '../services/db/category.service';
import { CategoryDto } from '../dto/category.dto';
import { BaseController } from '../../../common/crud/base.controller';
import { CategoryEntity } from '../entities/category.entity';

@Controller('category')
export class CategoryController extends BaseController<
  CategoryEntity,
  CategoryDto
> {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService);
  }
}
