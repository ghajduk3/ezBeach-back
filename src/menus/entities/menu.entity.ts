import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'menus' })
export class MenuEntity extends BaseEntity {
  @ManyToOne(() => RestaurantEntity, { eager: false })
  @JoinColumn([{ name: 'restaurantId', referencedColumnName: 'id' }])
  restaurant: RestaurantEntity;
  @Column()
  restaurantId: number;

  @OneToMany(()=>CategoryEntity, category =>category.menuId,{eager:true})
  categories: CategoryEntity[];
}
