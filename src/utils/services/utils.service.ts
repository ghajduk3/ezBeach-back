import * as _ from 'lodash';
import { HttpException } from '@nestjs/common';
export class UtilsService {
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E,
    options?: any,
  ): T;
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E[],
    options?: any,
  ): T[];
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E | E[],
    options?: any,
  ): T | T[] {
    if (Array.isArray(entity)) {
      return entity.map((u) => new model(u, options));
    }

    return new model(entity, options);
  }

  public static editFileName = (req, file, callback) => {
    const [name, fileExtName] = file.originalname.split('.');
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(null, `${name}-${randomName}.${fileExtName}`);
  }
  public static imageFileFilter = (req, file, callback) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      return callback(
        new HttpException('Only image files are allowed!', 400),
        false,
      );
    }
    callback(null, true);
  }

}