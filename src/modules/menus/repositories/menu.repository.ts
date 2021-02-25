import { EntityRepository } from 'typeorm';
import { MenuEntity } from '../entities/menu.entity';
import { MenuDto } from '../dto/menu.dto';
import { BaseRepository } from '../../../common/crud/base.repository';

@EntityRepository(MenuEntity)
export class MenuRepository extends BaseRepository<MenuDto, MenuEntity> {}
