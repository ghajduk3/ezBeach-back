export interface IBaseService<E, T> {
  getAll(): Promise<E[]>;
  get(id: number): Promise<E>;
  update(id: number, dto: T);
  create(dto: T): Promise<E>;
  delete(id: number);
}