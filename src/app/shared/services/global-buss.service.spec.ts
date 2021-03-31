import { TestBed } from '@angular/core/testing';

import { GlobalBussService } from './global-buss.service';

describe('GlobalBussService', () => {
  let service: GlobalBussService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalBussService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
