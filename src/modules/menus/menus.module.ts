import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { MenuController } from './controllers/menu.controller';
import { CategoryController } from './controllers/category.controller';
import { ItemController } from './controllers/item.controller';
import { MenuService } from './services/db/menu.service';
import { CategoryService } from './services/db/category.service';
import { ItemService } from './services/db/item.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MenuEntity } from './entities/menu.entity';
import { MenuRepository } from './repositories/menu.repository';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './repositories/category.repository';
import { ItemEntity } from './entities/item.entity';
import { ItemRepository } from './repositories/item.repository';

import { Menu1Repo } from './repositories/menu1repo';

@Module({
  imports: [
    MulterModule.register(),
    TypeOrmModule.forFeature([
      MenuEntity,
      MenuRepository,
      CategoryEntity,
      CategoryRepository,
      ItemEntity,
      ItemRepository,
      Menu1Repo
    ]),
    ConfigModule,
  ],
  controllers: [MenuController, CategoryController, ItemController],
  providers: [MenuService, CategoryService, ItemService],
})
export class MenusModule {
  constructor(private connection: Connection) {}
}
