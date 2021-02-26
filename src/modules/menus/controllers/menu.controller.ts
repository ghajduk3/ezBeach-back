import { Controller, Get, Query } from '@nestjs/common';
import { MenuService } from '../services/db/menu.service';
import { MenuDto } from '../dto/menu.dto';
import { MenuEntity } from '../entities/menu.entity';
import { BaseController } from '../../../common/crud/base.controller';
import { IAbstractDto } from '../../../common/dtos/IAbstract.dto';

// import { Menu1Service } from '../services/db/menu1.service';

@Controller('menu')
export class MenuController extends BaseController<MenuEntity, MenuDto> {
  constructor(private readonly menuService: MenuService) {
    super(menuService);
  }

  @Get('/filter')
  async findByRestaurantTable(@Query() params): Promise<IAbstractDto> {
    const { restaurantId, languageCode } = params;
    return this.menuService.findByRestaurantLanguage(
      restaurantId,
      languageCode,
    );
  }
}
