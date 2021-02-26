import { Injectable } from '@nestjs/common';
import { MenuEntity } from '../../entities/menu.entity';
import { BaseService } from '../../../../common/crud/base.service';
import { MenuDto } from '../../dto/menu.dto';
import { MenuRepository } from '../../repositories/menu.repository';
import { TableHistoryEntity } from '../../../tables/entities/table_history.entity';

@Injectable()
export class MenuService extends BaseService<MenuEntity, MenuDto> {
  constructor(private readonly menuRepo: MenuRepository) {
    super(menuRepo);
  }

  async findByRestaurantLanguage(
    restaurantId: number,
    languageCode: string,
  ): Promise<MenuEntity[]> {
    return this.menuRepo.findByRestaurantLanguage(restaurantId, languageCode);
  }
}
