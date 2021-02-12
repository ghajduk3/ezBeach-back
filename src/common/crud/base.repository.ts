import { AbstractDto } from '../dtos/abstract.dto';
import { Repository } from 'typeorm';
import { AbstractEntity } from '../entities/abstract.entity';
import { EntityNotFoundException } from '../../exceptions/entity-not-found.exception';
import { InternalServerErrorException } from '@nestjs/common';

export class BaseRepository<
  T extends AbstractDto,
  E extends AbstractEntity
> extends Repository<E> {
  createEntity(dto: T): Promise<E> {
    return new Promise<E>(async (resolve, reject) => {
      try {
        const entity = await this.save(dto);
        resolve(entity);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    });
  }

  findAll(): Promise<E[]> {
    return new Promise<E[]>(async (resolve, reject) => {
      try {
        const entities = await this.find();
        if (!entities) {
          throw new EntityNotFoundException('There are no available entities');
        }
        resolve(entities);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    });
  }

  findById(id: number): Promise<E> {
    return new Promise<E>(async (resolve, reject) => {
      try {
        const entity = await this.findOne({ where: { id: id } });

        if (!entity) {
          throw new EntityNotFoundException(
            'There is no available entity for id : ' + id,
          );
        }
        resolve(entity);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    });
  }

  deleteById(id: number) {
    this.findById(id)
      .then((res) => this.delete(id))
      .catch((e) => {
        throw new e();
      });
  }

  async updateById(id: number, dto: T) {
    try {
      const entity = await this.findById(id);
      this.update(id, dto);
    } catch (e) {
      throw new e();
    }
  }
}
