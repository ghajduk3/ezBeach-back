import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { TableDto } from '../dtos/table.dto';

@Entity({ name: 'tables' })
export class TableEntity extends AbstractEntity<TableDto> {
  @Column({}) table_name: string;
  @ManyToOne(() => RestaurantEntity, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'restaurantId', referencedColumnName: 'id' }])
  restaurant?: RestaurantEntity;
  @Column()
  restaurantId: number;

  dtoClass = TableDto;

  status?:string;
}
