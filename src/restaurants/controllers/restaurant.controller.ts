import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RestaurantDto } from '../dtos/restaurant.dto';
import { RestaurantService } from '../services/restaurant.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../../shared/utils';
import { diskStorage } from 'multer';
import {
  MultipleUploadInterceptor,
  uploadInterceptor,
} from '../../shared/interceptors';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';

@Controller('restaurant')
export class RestaurantController {
  constructor(
    private restaurantService: RestaurantService,
    private conf: ConfigService,
  ) {}
  @Get('')
  async findAll(@Req() req: any): Promise<RestaurantDto[]> {
    return await this.restaurantService.getAllRestaurants();
  }

  @Post()
  @UseInterceptors(
    MultipleUploadInterceptor(
      [
        { name: 'background', maxCount: 1 },
        { name: 'logo', maxCount: 1 },
      ],
      'files',
    ),
  )
  async create(
    @Req() req: any,
    @UploadedFiles() images,
    @Body() restaurantDto: RestaurantDto,
  ): Promise<RestaurantDto> {
    return await this.restaurantService.createRestaurant(restaurantDto, images);
  }
}
