import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinvoiceComponent } from './getinvoice.component';

describe('GetinvoiceComponent', () => {
  let component: GetinvoiceComponent;
  let fixture: ComponentFixture<GetinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
