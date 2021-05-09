import { TestBed } from '@angular/core/testing';

import { GetMyDetailsService } from './get-my-details.service';

describe('GetMyDetailsService', () => {
  let service: GetMyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
