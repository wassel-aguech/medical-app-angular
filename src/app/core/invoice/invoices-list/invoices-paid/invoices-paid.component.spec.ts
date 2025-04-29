import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesPaidComponent } from './invoices-paid.component';

describe('InvoicesPaidComponent', () => {
  let component: InvoicesPaidComponent;
  let fixture: ComponentFixture<InvoicesPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
