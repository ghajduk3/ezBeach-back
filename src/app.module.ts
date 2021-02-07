import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantService } from './restaurants/services/restaurant.service';
import { Connection } from 'typeorm';
import { RestaurantEntity } from './restaurants/entities/restaurant.entity';
import * as ormconfig from "./ormconfig";

@Module({
  imports: [
    RestaurantsModule,
    TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

// {
//   "type": "postgres",
//   "host": "localhost",
//   "port": 5432,
//   "username": "postgres",
//   "password": "postgres",
//   "database": "ez_db",
//   "entities": [RestaurantEntity],
//   "synchronize": true
// }