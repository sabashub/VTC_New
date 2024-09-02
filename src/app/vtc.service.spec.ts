import { TestBed } from '@angular/core/testing';

import { VtcService } from './vtc.service';

describe('VtcService', () => {
  let service: VtcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
