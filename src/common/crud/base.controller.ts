import { Body, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { AbstractDto } from '../dtos/abstract.dto';
import { AbstractEntity } from '../entities/abstract.entity';
import { IBaseService } from './IBase.service';

export class BaseController<E extends AbstractEntity, T extends AbstractDto> {
  constructor(private readonly IBaseService: IBaseService<E, T>) {}

  @Get()
  async findAll(): Promise<T[]> {
    const entities = await this.IBaseService.getAll();
    return <T[]>entities.map((ent)=>ent.toDto());
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<T> {
    const entity = await this.IBaseService.get(id);
    return <T>entity.toDto();
  }

  @Post()
  async create(@Body() dto: T): Promise<E> {
    const entity = await this.IBaseService.create(dto);
    return entity;
  }

  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string|number> {
    return this.IBaseService.delete(id);
  }

  @Put(':id')
  async update(@Body() dto: T,@Param('id') id:number): Promise<T> {
    const entity = await this.IBaseService.update(id, dto);
    return <T>entity.toDto();
  }
}