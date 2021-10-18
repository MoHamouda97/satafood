import { TestBed } from '@angular/core/testing';

import { BranchesZonesService } from './branches-zones.service';

describe('BranchesZonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchesZonesService = TestBed.get(BranchesZonesService);
    expect(service).toBeTruthy();
  });
});
