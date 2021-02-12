import { Column } from 'typeorm';
import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { ItemEntity } from '../entities/item.entity';


export class ItemDto extends AbstractDto{
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  categoryId: number;
  price: number;
  currency?: string;

  constructor(itemEntity:ItemEntity) {
    super();
    this.id = itemEntity.id;
    this.name = itemEntity.name;
    this.description = itemEntity.description;
    this.language = itemEntity.language;
    this.createdOn = itemEntity.createdOn;
    this.updatedOn = itemEntity.updatedOn;
    this.categoryId = itemEntity.categoryId;
    this.price = itemEntity.price;
    this.currency = itemEntity.currency;
  }


}
