import { Injectable } from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { BaseService } from '../../../common/crud/base.service';
import { RestaurantEntity } from '../entities/restaurant.entity';


@Injectable()
export class RestaurantService extends BaseService<
  RestaurantEntity,
  RestaurantDto
> {
  constructor(private readonly restaurantRepo: RestaurantRepository) {
    super(restaurantRepo);
  }
  async createRestaurant(
    restaurantDto: RestaurantDto,
    images: Record<string, any>,
  ): Promise<RestaurantEntity> {
    restaurantDto.bck_img_loc = images.background[0].path;
    restaurantDto.logo_loc = images.logo[0].path;
    const entity = this.restaurantRepo.createEntity(restaurantDto);
    console.log(entity);
    return this.restaurantRepo.createEntity(restaurantDto);
  }
}