import { TestBed } from '@angular/core/testing';

import { GetRoomDetailsService } from './get-room-details.service';

describe('GetRoomDetailsService', () => {
  let service: GetRoomDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRoomDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
