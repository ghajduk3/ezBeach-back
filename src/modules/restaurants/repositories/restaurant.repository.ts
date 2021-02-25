import { EntityRepository, Repository } from 'typeorm';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { BaseRepository } from '../../../common/crud/base.repository';
import { RestaurantDto } from '../dtos/restaurant.dto';

@EntityRepository(RestaurantEntity)
export class RestaurantRepository extends BaseRepository<
  RestaurantDto,
  RestaurantEntity
> {}
