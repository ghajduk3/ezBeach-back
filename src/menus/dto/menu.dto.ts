import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class createMenuDto {
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  restaurantId: number;
}

export interface Menu {
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  restaurantId: number;
}
