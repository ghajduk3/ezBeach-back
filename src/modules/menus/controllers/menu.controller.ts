import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { MenuService } from '../services/db/menu.service';
import { MenuDto } from '../dto/menu.dto';
import { createMenuDto } from '../dto/createMenuDto.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAllMenus(@Req() req: any): Promise<MenuDto[]> {
    const menus = await this.menuService.getAllMenus();
    return menus.map((menu) =>menu.toDto());
  }

  @Post()
  async createMenu(
    @Req() req: any,
    @Body() menuDto: createMenuDto,
  ): Promise<MenuDto> {
    return await this.menuService.createMenu(menuDto);
  }

  @Get('filter')
  async findMenuByRestaurantId(@Req() req:any, @Query() queryParams): Promise<MenuDto>{
    console.log(queryParams);
    return await this.menuService.getMenuByRestaurantId(
      queryParams.restaurantId
    );
  }

  @Get(':id')
  async findMenuById(@Req() req:any, @Param("id") id : number): Promise<MenuDto>{
    const menu = await this.menuService.getMenuById(id);
    return menu.toDto();
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteMenuById(@Req() req:any, @Param("id") id : number){
    return await this.menuService.deleteMenuById(id);
  }

  @HttpCode(204)
  @Put(':id')
  async updateMenuById(@Req() req:any, @Param("id") id : number, @Body() menuDto :Partial<createMenuDto>){
    return await this.menuService.updateMenuById(id, menuDto);
  }
}
