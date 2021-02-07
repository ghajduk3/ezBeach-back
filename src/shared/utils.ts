import { HttpException } from '@nestjs/common';

export const imageFileFilter = (req, file, callback) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
    return callback(
      new HttpException('Only image files are allowed!', 400),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const [name, fileExtName] = file.originalname.split('.');
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}.${fileExtName}`);
};