import { RestaurantEntity } from '../modules/restaurants/entities/restaurant.entity';
import { RestaurantDto } from '../modules/restaurants/dtos/restaurant.dto';

// export const toRestaurantDto = (data: RestaurantEntity): RestaurantDto => {
//   const {
//     id,
//     name,
//     description,
//     lat,
//     lon,
//     address,
//     createdOn,
//     updatedOn,
//     bck_img_loc,
//     logo_loc,
//     owner_id,
//   } = data;
//
//   const restaurantDto: RestaurantDto = {
//     id,
//     name,
//     description,
//     lat,
//     lon,
//     address,
//     createdOn,
//     updatedOn,
//     bck_img_loc,
//     logo_loc,
//     owner_id
//   };
//   return restaurantDto;
// };
//
// export const toRestaurantEntity = (data: RestaurantDto): RestaurantEntity => {
//   return {
//     name: data.name,
//     description: data.description,
//     lat: data.lat,
//     lon: data.lon,
//     address: data.address,
//     bck_img_loc: data.bck_img_loc,
//     logo_loc: data.logo_loc,
//     owner_id: data.owner_id
//   };
// };
