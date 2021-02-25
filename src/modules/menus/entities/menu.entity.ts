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
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { MenuDto } from '../dto/menu.dto';
//
// @Entity({ name: 'menus' })
// export class MenuEntity extends BaseEntity {
//   @ManyToOne(() => RestaurantEntity, { eager: false,onDelete : 'CASCADE', onUpdate :'CASCADE'})
//   @JoinColumn([{ name: 'restaurantId', referencedColumnName: 'id' }])
//   restaurant?: RestaurantEntity;
//   @Column()
//   restaurantId: number;
//
//   @OneToMany(()=>CategoryEntity, category =>category.menuId,{eager:true})
//   categories?: CategoryEntity[];
// }

@Entity({ name: 'menus' })
export class MenuEntity extends AbstractEntity<MenuDto> {
  @Column({ type: 'varchar', length: 50, nullable: false }) name: string;
  @Column({ type: 'text', nullable: true }) description?: string;
  @Column({ type: 'char', length: 2, nullable: false }) language: string;
  @CreateDateColumn() createdOn?: Date;
  @UpdateDateColumn() updatedOn?: Date;
  @ManyToOne(() => RestaurantEntity, { eager: false,onDelete : 'CASCADE', onUpdate :'CASCADE'})
  @JoinColumn([{ name: 'restaurantId', referencedColumnName: 'id' }])
  restaurant?: RestaurantEntity;
  @Column()
  restaurantId: number;

  @OneToMany(()=>CategoryEntity, category =>category.menuId,{eager:true})
  categories?: CategoryEntity[];

  dtoClass = MenuDto;
}
