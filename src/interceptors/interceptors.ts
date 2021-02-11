import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UtilsService } from '../utils/services/utils.service';

export const uploadInterceptor = (fieldname: string, destination: string) => {
  return FileInterceptor(fieldname, {
    storage: diskStorage({
      destination: destination,
      filename: UtilsService.editFileName,
    }),
    fileFilter: UtilsService.imageFileFilter,
  });
};

export const MultipleUploadInterceptor = (fieldnames, destination: string) => {
  return FileFieldsInterceptor(fieldnames, {
    storage: diskStorage({
      destination: destination,
      filename: UtilsService.editFileName,
    }),
    fileFilter: UtilsService.imageFileFilter,
  });
};
