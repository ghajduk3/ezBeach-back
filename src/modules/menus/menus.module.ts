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
import { TableEntity } from '../tables/entities/table.entity';
import { TableRepository } from '../tables/repositories/table.repository';
import { TableStatusEntity } from '../tables/entities/table_status.entity';
import { TableStatusRepository } from '../tables/repositories/table_status.repository';
import { TableHistoryRepository } from '../tables/repositories/table_history.repository';
import { TableHistoryEntity } from '../tables/entities/table_history.entity';
import { TableController } from '../tables/controllers/table.controller';
import { TableStatusController } from '../tables/controllers/table_status.controller';
import { TableHistoryController } from '../tables/controllers/table_history.controller';
import { TableService } from '../tables/services/table.service';
import { TableStatusService } from '../tables/services/table_status.service';
import { TableHistoryService } from '../tables/services/table_history.service';



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
      TableEntity,
      TableRepository,
      TableStatusEntity,
      TableStatusRepository,
      TableHistoryRepository,
      TableHistoryEntity
    ]),
    ConfigModule,
  ],
  controllers: [MenuController, CategoryController, ItemController,TableController,TableStatusController,TableHistoryController],
  providers: [MenuService, CategoryService, ItemService,TableService,TableStatusService,TableHistoryService],
})
export class MenusModule {
  constructor(private connection: Connection) {}
}
