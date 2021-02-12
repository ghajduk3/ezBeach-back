import { AbstractEntity } from '../entities/abstract.entity';
import { AbstractDto } from '../dtos/abstract.dto';
import { BaseRepository } from './base.repository';
import { IBaseService } from './IBase.service';
import { Injectable } from '@nestjs/common';


export class BaseService<E extends AbstractEntity, T extends AbstractDto>
  implements IBaseService<E, T> {

  constructor(private genericRepository: BaseRepository<T, E>) {


  }

  create(dto: any): Promise<E> {

    return this.genericRepository.createEntity(dto);
  }

  getAll(): Promise<E[]> {
    return this.genericRepository.findAll();
  }

  get(id: number): Promise<E> {
    return this.genericRepository.findById(id);
  }

  delete(id: number) {
    this.genericRepository.deleteById(id);
  }

  update(id: number, dto: T) {
    this.genericRepository.updateById(id, dto)
  }
}