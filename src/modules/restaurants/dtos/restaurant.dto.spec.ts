import { RestaurantDto } from './restaurant.dto';

describe('RestaurantDto', () => {
  it('should be defined', () => {
    expect(new RestaurantDto()).toBeDefined();
  });
});
