import { BaseRepository } from '../../../common/crud/base.repository';
import { MenuEntity } from '../entities/menu.entity';
import { MenuDto } from '../dto/menu.dto';
import { EntityRepository } from 'typeorm';

@EntityRepository(MenuEntity)
export class Menu1Repo extends BaseRepository<MenuDto, MenuEntity> {}


