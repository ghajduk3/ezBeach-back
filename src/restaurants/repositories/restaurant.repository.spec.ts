import { RestaurantRepository } from './restaurant.repository';

describe('RestaurantRepository', () => {
  it('should be defined', () => {
    expect(new RestaurantRepository()).toBeDefined();
  });
});
