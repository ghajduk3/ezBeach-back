import { Controller } from '@nestjs/common';
import { MenuService } from '../services/db/menu.service';
import { MenuDto } from '../dto/menu.dto';
import { MenuEntity } from '../entities/menu.entity';
import { BaseController } from '../../../common/crud/base.controller';

// import { Menu1Service } from '../services/db/menu1.service';

@Controller('menu')
export class MenuController extends BaseController<MenuEntity, MenuDto> {
  constructor(private readonly menuService: MenuService) {
    super(menuService);
  }
}
