import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { MenuEntity } from '../entities/menu.entity';
import { CategoryDto } from './category.dto';


export class MenuDto extends AbstractDto{
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  restaurantId: number;
  categories: CategoryDto[];

  constructor(menu: MenuEntity) {
    super();
    this.id = menu.id;
    this.name = menu.name;
    this.description = menu.description;
    this.language = menu.language;
    this.createdOn = menu.createdOn;
    this.restaurantId = menu.restaurantId;
    this.categories = menu.categories;
  }

}