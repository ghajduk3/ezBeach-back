import { ItemRepository } from './item.repository';

describe('ItemRepository', () => {
  it('should be defined', () => {
    expect(new ItemRepository()).toBeDefined();
  });
});
