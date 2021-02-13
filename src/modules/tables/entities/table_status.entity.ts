import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { TableStatusDto } from '../dtos/table_status.dto';

@Entity({ name: 'table_status' })
export class TableStatusEntity extends AbstractEntity<TableStatusDto> {
  @Column() status: string;

  dtoClass = TableStatusDto;
}
