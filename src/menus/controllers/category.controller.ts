import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { MenuService } from '../services/db/menu.service';
import { createMenuDto, Menu } from '../dto/menu.dto';
import { CategoryService } from '../services/db/category.service';
import { Category, createCategoryDto } from '../dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAllCategories(@Req() req: any): Promise<Category[]> {
    return await this.categoryService.getAllCategories();
  }

  @Post()
  async createCategory(
    @Req() req: any,
    @Body() categoryDto: createCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.createCategory(categoryDto);
  }
}
