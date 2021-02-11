import { Injectable } from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { toRestaurantDto, toRestaurantEntity } from '../../../shared/mappers';

@Injectable()
export class RestaurantService {
  constructor(private restRepo: RestaurantRepository) {}

  async getAllRestaurants(): Promise<RestaurantDto[]> {
    const rests = await this.restRepo.find();
    return rests.map((rest) => toRestaurantDto(rest));
  }

  async createRestaurant(restaurantDto: RestaurantDto,images:Record<string,any>): Promise<RestaurantDto> {
    restaurantDto.bck_img_loc = images.background[0].path;
    restaurantDto.logo_loc = images.logo[0].path;
    const restaurantEntity = this.restRepo.create(restaurantDto);
    await this.restRepo.save(restaurantEntity);
    return toRestaurantDto(restaurantEntity);
  }
}
