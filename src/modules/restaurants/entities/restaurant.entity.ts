import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { RestaurantDto } from '../dtos/restaurant.dto';

@Entity()
export class RestaurantEntity extends AbstractEntity<RestaurantDto>{
  @Column({ type: 'varchar', length: 50, nullable: false }) name: string;
  @Column({ type: 'text', nullable: true }) description?: string;
  @Column({ type: 'float', nullable: true }) lat?: number;
  @Column({ type: 'float', nullable: true }) lon?: number;
  @Column({ type: 'varchar', nullable: false }) address: string;
  @Column({ type: 'varchar', nullable: false }) bck_img_loc?: string;
  @Column({ type: 'varchar', nullable: false }) logo_loc?: string;
  @Column({ type: 'int', nullable: false, default: 1 }) owner_id: number;
  @CreateDateColumn() createdOn?: Date;
  @UpdateDateColumn() updatedOn?: Date;

  dtoClass = RestaurantDto;

}
