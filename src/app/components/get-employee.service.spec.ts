import { TestBed } from '@angular/core/testing';

import { GetEmployeeService } from './get-employee.service';

describe('GetEmployeeService', () => {
  let service: GetEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
