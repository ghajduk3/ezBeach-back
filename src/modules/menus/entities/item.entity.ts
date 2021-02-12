import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { MenuEntity } from './menu.entity';
import { CategoryEntity } from './category.entity';
import { BaseEntity } from './base.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { MenuDto } from '../dto/menu.dto';
import { ItemDto } from '../dto/item.dto';

@Entity('item')
export class ItemEntity extends AbstractEntity<ItemDto> {
  @Column({ type: 'varchar', length: 50, nullable: false }) name: string;
  @Column({ type: 'text', nullable: true }) description?: string;
  @Column({ type: 'char', length: 2, nullable: false }) language: string;
  @CreateDateColumn() createdOn?: Date;
  @UpdateDateColumn() updatedOn?: Date;
  @Column({ type: 'float', nullable: false }) price: number;
  @Column({ type: 'varchar', width: 5, default: 'eur' }) currency?: string;
  @ManyToOne(() => CategoryEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'categoryId', referencedColumnName: 'id' }])
  // category: CategoryEntity;
  @Column()
  categoryId: number;
  dtoClass =  ItemDto;
}
