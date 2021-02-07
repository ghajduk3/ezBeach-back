import { Injectable } from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { toRestaurantDto, toRestaurantEntity } from '../../shared/mappers';

@Injectable()
export class RestaurantService {
  constructor(private restRepo: RestaurantRepository) {}

  async getAllRestaurants(): Promise<RestaurantDto[]> {
    const rests = await this.restRepo.find();
    return rests.map((rest) => toRestaurantDto(rest));
  }

  async createRestaurant(restaurantDto: RestaurantDto): Promise<RestaurantDto> {
    const restaurantEntity = await this.restRepo.create(restaurantDto);
    await this.restRepo.save(restaurantEntity);
    return toRestaurantDto(restaurantEntity);
  }
}
