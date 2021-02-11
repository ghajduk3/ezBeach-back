import { BadRequestException, NotFoundException } from '@nestjs/common';

export class EntityNotFoundException extends NotFoundException {
  constructor(message?:string,error?: string) {
    super(message, error);
  }
}