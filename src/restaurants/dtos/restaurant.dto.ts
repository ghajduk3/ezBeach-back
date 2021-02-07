import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class RestaurantDto {
  id?: number;
  name: string;
  description?: string;
  lat?: number;
  lon?: number;
  address: string;
  createdOn?: Date;
  updatedOn?: Date;
}
