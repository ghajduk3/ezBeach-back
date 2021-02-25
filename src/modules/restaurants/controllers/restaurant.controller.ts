import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantService } from '../services/restaurant.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  MultipleUploadInterceptor,
  uploadInterceptor,
} from '../../../interceptors/interceptors';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import { BaseController } from '../../../common/crud/base.controller';
import { MenuEntity } from '../../menus/entities/menu.entity';
import { MenuDto } from '../../menus/dto/menu.dto';
import { MenuService } from '../../menus/services/db/menu.service';
import { RestaurantEntity } from '../entities/restaurant.entity';

// @Controller('restaurant')
// export class RestaurantController {
//   constructor(
//     private restaurantService: RestaurantService,
//     private conf: ConfigService,
//   ) {}
//   @Get('')
//   async findAll(@Req() req: any): Promise<RestaurantDto[]> {
//     return await this.restaurantService.getAllRestaurants();
//   }
//
//   @Post()
//   @UseInterceptors(
//     MultipleUploadInterceptor(
//       [
//         { name: 'background', maxCount: 1 },
//         { name: 'logo', maxCount: 1 },
//       ],
//       'files',
//     ),
//   )
//   async create(
//     @Req() req: any,
//     @UploadedFiles() images,
//     @Body() restaurantDto: RestaurantDto,
//   ): Promise<RestaurantDto> {
//     return await this.restaurantService.createRestaurant(restaurantDto, images);
//   }
// }

@Controller('restaurant')
export class RestaurantController extends BaseController<
  RestaurantEntity,
  RestaurantDto
> {
  constructor(private readonly restaurantService: RestaurantService) {
    super(restaurantService);
  }

  @Post('create')
  @UseInterceptors(
    MultipleUploadInterceptor(
      [
        { name: 'background', maxCount: 1 },
        { name: 'logo', maxCount: 1 },
      ],
      'files',
    ),
  )
  async createRestaurant(
    @Req() req: any,
    @UploadedFiles() images,
    @Body() restaurantDto: RestaurantDto
  ): Promise<RestaurantDto>{
    return await this.restaurantService.createRestaurant(restaurantDto, images);
  }
}
