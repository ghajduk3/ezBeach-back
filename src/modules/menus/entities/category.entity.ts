import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { MenuEntity } from './menu.entity';
import { BaseEntity } from './base.entity';
import { ItemEntity } from './item.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { CategoryDto } from '../dto/category.dto';

@Entity('category')
export class CategoryEntity extends AbstractEntity<CategoryDto>{
  @Column({ type: 'varchar', length: 50, nullable: false }) name: string;
  @Column({ type: 'text', nullable: true }) description?: string;
  @Column({ type: 'char', length: 2, nullable: false }) language: string;
  @CreateDateColumn() createdOn?: Date;
  @UpdateDateColumn() updatedOn?: Date;
  @ManyToOne(() => MenuEntity,{onDelete : 'CASCADE', onUpdate :'CASCADE'})
  @JoinColumn([{ name: 'menuId', referencedColumnName: 'id' }])
  // menu: MenuEntity;
  @Column()
  menuId: number;

  @OneToMany(() => ItemEntity, item =>item.categoryId,{eager:true})
  items: ItemEntity[];

  dtoClass = CategoryDto;
}
