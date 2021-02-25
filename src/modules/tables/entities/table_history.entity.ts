import {
  Column,
  CreateDateColumn,
  Entity,
  EntityRepository,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { RestaurantEntity } from '../../restaurants/entities/restaurant.entity';
import { TableEntity } from './table.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { TableHistoryDto } from '../dtos/table_history.dto';
import { TableStatusEntity } from './table_status.entity';

@Entity({ name: 'table_history' })
export class TableHistoryEntity extends AbstractEntity<TableHistoryDto> {
  @Column({}) set_by: number;
  @CreateDateColumn() set_at: Date;


  @ManyToOne(() => TableEntity, {
    eager: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'tableId', referencedColumnName: 'id' }])
  table?: TableEntity;
  @Column()
  tableId: number;

  @ManyToOne(() => TableStatusEntity, {
    eager: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'statusId', referencedColumnName: 'id' }])
  status?: TableStatusEntity['status'];
  @Column()
  statusId:number;

  dtoClass = TableHistoryDto;
}
