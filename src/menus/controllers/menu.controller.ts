import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { RestaurantDto } from '../../restaurants/dtos/restaurant.dto';
import { createMenuDto, Menu } from '../dto/menu.dto';
import { MenuService } from '../services/db/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAllMenus(@Req() req: any): Promise<Menu[]> {
    return await this.menuService.getAllMenus();
  }

  @Post()
  async createMenu(
    @Req() req: any,
    @Body() menuDto: createMenuDto,
  ): Promise<Menu> {
    return await this.menuService.createMenu(menuDto);
  }
}
