import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantController } from './controllers/restaurant.controller';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity, RestaurantRepository])],
  providers: [RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantsModule {
  constructor(private connection: Connection) {}

}
