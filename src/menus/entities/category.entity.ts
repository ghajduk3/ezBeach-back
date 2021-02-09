import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { MenuEntity } from './menu.entity';
import { BaseEntity } from './base.entity';
import { ItemEntity } from './item.entity';

@Entity('category')
export class CategoryEntity extends BaseEntity{
  @ManyToOne(() => RestaurantEntity)
  @JoinColumn([{ name: 'menuId', referencedColumnName: 'id' }])
  // menu: MenuEntity;
  @Column()
  menuId: number;

  @OneToMany(() => ItemEntity, item =>item.categoryId,{eager:true})
  items: ItemEntity[];
}
