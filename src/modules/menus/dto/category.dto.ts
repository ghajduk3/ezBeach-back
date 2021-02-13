import { CategoryEntity } from '../entities/category.entity';
import { AbstractDto } from '../../../common/dtos/abstract.dto';
import { ItemDto } from './item.dto';



export class CategoryDto extends AbstractDto{
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  menuId: number;
  items: ItemDto[];


  constructor(categoryEntity : CategoryEntity) {
    super();
    this.id = categoryEntity.id;
    this.name = categoryEntity.name;
    this.description = categoryEntity.description;
    this.language = categoryEntity.language;
    this.createdOn = categoryEntity.createdOn;
    this.updatedOn = categoryEntity.updatedOn;
    this.menuId = categoryEntity.menuId;
    this.items = categoryEntity.items;
  }
}
