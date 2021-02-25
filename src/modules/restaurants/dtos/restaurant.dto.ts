import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { RestaurantEntity } from '../entities/restaurant.entity';

export class RestaurantDto extends AbstractDto {
  id?: number;
  name: string;
  description?: string;
  lat?: number;
  lon?: number;
  address: string;
  createdOn?: Date;
  updatedOn?: Date;
  logo_loc?: string;
  bck_img_loc?: string;
  owner_id?: number;


  constructor(restaurant : RestaurantEntity) {
    super();
    this.id = restaurant.id;
    this.name = restaurant.name;
    this.description = restaurant.description;
    this.lat = restaurant.lat;
    this.lon = restaurant.lon;
    this.address = restaurant.address;
    this.createdOn = restaurant.createdOn;
    this.updatedOn = restaurant.updatedOn;
    this.logo_loc = restaurant.logo_loc;
    this.bck_img_loc = restaurant.bck_img_loc;
    this.owner_id = restaurant.owner_id;
  }
}
