import { EntityRepository } from 'typeorm';
import { MenuEntity } from '../entities/menu.entity';
import { MenuDto } from '../dto/menu.dto';
import { BaseRepository } from '../../../common/crud/base.repository';
import { EntityNotFoundException } from '../../../exceptions/entity-not-found.exception';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(MenuEntity)
export class MenuRepository extends BaseRepository<MenuDto, MenuEntity> {
  async findByRestaurantLanguage(
    restaurantId: number,
    languageCode: string,
  ): Promise<MenuEntity[]> {
    return new Promise<MenuEntity[]>(async (resolve, reject) => {
      try {
        const entities = await this.manager
          .createQueryBuilder()
          .select('menu')
          .from(MenuEntity,'menu')
          .leftJoinAndSelect('menu.categories', 'category')
          .leftJoinAndSelect('category.items', 'item')
          .where("menu.restaurantId=:restaurantId",{restaurantId:restaurantId})
          .andWhere("menu.language=:language",{language:languageCode})
          .andWhere("category.language=:language",{language:languageCode})
          .andWhere("item.language=:language",{language:languageCode})
          .getMany();
        if (entities.length == 0) {
          reject(
            new EntityNotFoundException(
              'There are no available menues for the selected restaurant',
            ),
          );
        }
        resolve(entities);
      } catch (e) {
        reject(new InternalServerErrorException(e));
      }
    });
  }
}
