import { TestBed } from '@angular/core/testing';

import { RoomGuestOperationsService } from './room-guest-operations.service';

describe('RoomGuestOperationsService', () => {
  let service: RoomGuestOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomGuestOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
