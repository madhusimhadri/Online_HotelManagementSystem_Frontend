import { TestBed } from '@angular/core/testing';

import { GuestDetailsService } from './guest-details.service';

describe('GuestDetailsService', () => {
  let service: GuestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
