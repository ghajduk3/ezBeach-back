import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RestaurantEntity {
  @PrimaryGeneratedColumn() id?: number;
  @Column({ type: 'varchar', length: 50, nullable: false }) name: string;
  @Column({ type: 'text', nullable: true }) description?: string;
  @Column({ type: 'float', nullable: true }) lat?: number;
  @Column({ type: 'float', nullable: true }) lon?: number;
  @Column({ type: 'varchar', nullable: false }) address: string;
  @CreateDateColumn() createdOn?: Date;
  @UpdateDateColumn() updatedOn?: Date;
}
