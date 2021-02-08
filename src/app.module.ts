import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantService } from './restaurants/services/restaurant.service';
import { Connection } from 'typeorm';
import { RestaurantEntity } from './restaurants/entities/restaurant.entity';
// import * as ormconfig from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { DatabaseConfig } from './config/database.config';


@Module({
  imports: [
    RestaurantsModule,
    // TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useClass: DatabaseConfig
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load:[config],
      envFilePath :'environments/.env.' + process.env.NODE_ENV
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
