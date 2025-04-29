import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReportsComponent } from './invoice-reports.component';

describe('InvoiceReportsComponent', () => {
  let component: InvoiceReportsComponent;
  let fixture: ComponentFixture<InvoiceReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
