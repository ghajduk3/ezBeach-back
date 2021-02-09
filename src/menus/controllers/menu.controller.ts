import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
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

  @Get('filter')
  async findMenuByRestaurantId(@Req() req:any, @Query() queryParams): Promise<Menu>{
    console.log(queryParams);
    return await this.menuService.getMenuByRestaurantId(
      queryParams.restaurantId
    );
  }

  @Get(':id')
  async findMenuById(@Req() req:any, @Param("id") id : number): Promise<Menu>{
    return await this.menuService.getMenuById(id);
  }

  @Delete(':id')
  async deleteMenuById(@Req() req:any, @Param("id") id : number){
    return await this.menuService.deleteMenuById(id);
  }

  @Put(':id')
  async updateMenuById(@Req() req:any, @Param("id") id : number, @Body() menuDto :Partial<createMenuDto>){
    return await this.menuService.updateMenuById(id,menuDto);
  }
}
