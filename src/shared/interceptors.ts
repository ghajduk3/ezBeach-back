import { editFileName, imageFileFilter } from './utils';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const uploadInterceptor = (fieldname: string, destination: string) => {
  return FileInterceptor(fieldname, {
    storage: diskStorage({
      destination: destination,
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  });
};

export const MultipleUploadInterceptor = (fieldnames, destination: string) => {
  return FileFieldsInterceptor(fieldnames, {
    storage: diskStorage({
      destination: destination,
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  });
};
