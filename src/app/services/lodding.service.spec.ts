import { TestBed } from '@angular/core/testing';

import { LoddingService } from './lodding.service';

describe('LoddingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoddingService = TestBed.get(LoddingService);
    expect(service).toBeTruthy();
  });
});
