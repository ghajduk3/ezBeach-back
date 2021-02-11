import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { MenuEntity } from '../entities/menu.entity';

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

export class MenuDto extends AbstractDto{
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  restaurantId: number;

  constructor(menu: MenuEntity) {
    super();
    this.id = menu.id;
    this.name = menu.name;
    this.description = menu.description;
    this.language = menu.language;
    this.createdOn = menu.createdOn;
    this.restaurantId = menu.restaurantId;
  }

}