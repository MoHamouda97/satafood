import { TestBed } from '@angular/core/testing';

import { RestaurantareaService } from './restaurantarea.service';

describe('RestaurantareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantareaService = TestBed.get(RestaurantareaService);
    expect(service).toBeTruthy();
  });
});
