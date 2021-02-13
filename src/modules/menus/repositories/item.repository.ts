import { EntityRepository } from 'typeorm';
import { ItemEntity } from '../entities/item.entity';
import { ItemDto } from '../dto/item.dto';
import { BaseRepository } from '../../../common/crud/base.repository';

@EntityRepository(ItemEntity)
export class ItemRepository extends BaseRepository<ItemDto, ItemEntity> {
}