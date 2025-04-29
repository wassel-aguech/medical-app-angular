import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesOverdueComponent } from './invoices-overdue.component';

describe('InvoicesOverdueComponent', () => {
  let component: InvoicesOverdueComponent;
  let fixture: ComponentFixture<InvoicesOverdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesOverdueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
