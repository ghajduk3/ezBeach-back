import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantService } from '../services/restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}
  @Get('')
  async findAll(@Req() req: any): Promise<RestaurantDto[]> {
    return await this.restaurantService.getAllRestaurants();
  }

  @Post()
  async create(
    @Req() req: any,
    @Body() restaurantDto: RestaurantDto,
  ): Promise<RestaurantDto> {
    return await this.restaurantService.createRestaurant(restaurantDto);
  }
}
