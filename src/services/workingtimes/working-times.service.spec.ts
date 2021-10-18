import { TestBed } from '@angular/core/testing';

import { WorkingTimesService } from './working-times.service';

describe('WorkingTimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkingTimesService = TestBed.get(WorkingTimesService);
    expect(service).toBeTruthy();
  });
});
