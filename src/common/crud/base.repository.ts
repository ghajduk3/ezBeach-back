import { AbstractDto } from '../dtos/abstract.dto';
import { AbstractRepository, Repository } from 'typeorm';
import { AbstractEntity } from '../entities/abstract.entity';
import { EntityNotFoundException } from '../../exceptions/entity-not-found.exception';
import {
  HttpServer,
  HttpService,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Http2ServerResponse } from 'http2';

export class BaseRepository<
  T extends AbstractDto,
  E extends AbstractEntity
> extends AbstractRepository<E> {
  createEntity(dto: T): Promise<E> {
    return new Promise<E>(async (resolve, reject) => {
      try {
        const entity = await this.repository.save(dto);
        resolve(entity);
      } catch (e) {
        reject(new InternalServerErrorException(e));
      }
    });
  }

  public findAll(): Promise<E[]> {
    return new Promise<E[]>(async (resolve, reject) => {
      try {
        const entities = await this.repository.find();
        if (!entities) {
          reject(
            new EntityNotFoundException('There are no available entities'),
          );
        }
        resolve(entities);
      } catch (e) {
        reject(new InternalServerErrorException(e));
      }
    });
  }

  findById(id: number): Promise<E> {
    return new Promise<E>(async (resolve, reject) => {
      try {
        const entity = await this.repository.findOne({ where: { id: id } });

        if (!entity) {
          reject(
            new EntityNotFoundException(
              'There is no available entity for id : ' + id,
            ),
          );
        }
        resolve(entity);
      } catch (e) {
        reject(e);
      }
    });
  }

  deleteById(id: number): Promise<string | number> {
    return new Promise<string | number>(async (resolve, reject) => {
      try {
        const entity = await this.findById(id);
        this.repository.delete(id);
        resolve('Entity is deleted');
      } catch (e) {
        reject(e);
      }
    });
  }

  async updateById(id: number, dto: T): Promise<E> {
    return new Promise<E>(async (resolve, reject) => {
      try {
        await this.repository.update(id, dto);
        const entity = await this.findById(id);
        resolve(entity);
      } catch (e) {
        reject(e);
      }
    });
  }
}
