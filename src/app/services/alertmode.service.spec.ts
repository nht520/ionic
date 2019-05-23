import { TestBed } from '@angular/core/testing';

import { AlertmodeService } from './alertmode.service';

describe('AlertmodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertmodeService = TestBed.get(AlertmodeService);
    expect(service).toBeTruthy();
  });
});
