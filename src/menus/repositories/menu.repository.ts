import { EntityRepository, Repository } from 'typeorm';
import { MenuEntity } from '../entities/menu.entity';

@EntityRepository(MenuEntity)
export class MenuRepository extends Repository<MenuEntity>{}
