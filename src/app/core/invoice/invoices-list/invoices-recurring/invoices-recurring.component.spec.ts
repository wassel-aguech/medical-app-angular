import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesRecurringComponent } from './invoices-recurring.component';

describe('InvoicesRecurringComponent', () => {
  let component: InvoicesRecurringComponent;
  let fixture: ComponentFixture<InvoicesRecurringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesRecurringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesRecurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
