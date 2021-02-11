import { PrimaryGeneratedColumn } from 'typeorm';
import { AbstractDto } from '../dtos/abstract.dto';
import { UtilsService } from '../../utils/services/utils.service';

export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
  @PrimaryGeneratedColumn()
  id: number;

  abstract dtoClass: new (entity: AbstractEntity, options?: any) => T;


  toDto(options?: any): T {
    return UtilsService.toDto(this.dtoClass, this, options);
  }
}