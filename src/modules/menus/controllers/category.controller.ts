import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CategoryService } from '../services/db/category.service';
import { CategoryDto} from '../dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAllCategories(@Req() req: any): Promise<CategoryDto[]> {
    const categories = await this.categoryService.getAllCategories();
    return categories.map((category) => category.toDto());
  }

  @Post()
  async createCategory(
    @Req() req: any,
    @Body() categoryDto: CategoryDto,
  ): Promise<CategoryDto> {
    const category = await this.categoryService.createCategory(categoryDto);
    return category.toDto();
  }
}
