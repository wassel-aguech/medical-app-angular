import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesCancelledComponent } from './invoices-cancelled.component';

describe('InvoicesCancelledComponent', () => {
  let component: InvoicesCancelledComponent;
  let fixture: ComponentFixture<InvoicesCancelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesCancelledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
