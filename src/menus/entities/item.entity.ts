import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { MenuEntity } from './menu.entity';
import { CategoryEntity } from './category.entity';
import { BaseEntity } from './base.entity';

@Entity('item')
export class ItemEntity extends BaseEntity {
  @Column({ type: 'float', nullable: false }) price: number;
  @Column({ type: 'varchar', width: 5, default: 'eur' }) currency?: string;
  @ManyToOne(() => CategoryEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'categoryId', referencedColumnName: 'id' }])
  // category: CategoryEntity;
  @Column()
  categoryId: number;
}
