import { RestaurantEntity } from '../restaurants/entities/restaurant.entity';
import { RestaurantDto } from '../restaurants/dtos/restaurant.dto';

export const toRestaurantDto = (data: RestaurantEntity): RestaurantDto => {
  const {
    id,
    name,
    description,
    lat,
    lon,
    address,
    createdOn,
    updatedOn,
  } = data;

  const restaurantDto: RestaurantDto = {
    id,
    name,
    description,
    lat,
    lon,
    address,
    createdOn,
    updatedOn,
  };
  return restaurantDto;
};

export const toRestaurantEntity = (data: RestaurantDto): RestaurantEntity => {
  return {
    name: data.name,
    description: data.description,
    lat: data.lat,
    lon: data.lon,
    address: data.address,
  };
};
