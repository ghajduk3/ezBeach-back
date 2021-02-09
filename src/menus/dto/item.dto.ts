import { Column } from 'typeorm';

export class createItemDto {
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  categoryId: number;
  price: number;
  currency?: string;
}

export interface Item {
  id?: number;
  name: string;
  description?: string;
  language: string;
  createdOn?: Date;
  updatedOn?: Date;
  categoryId: number;
  price: number;
  currency?: string;
}
