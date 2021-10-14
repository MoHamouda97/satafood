import { TestBed } from '@angular/core/testing';

import { MinMenuService } from './min-menu.service';

describe('MinMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinMenuService = TestBed.get(MinMenuService);
    expect(service).toBeTruthy();
  });
});
