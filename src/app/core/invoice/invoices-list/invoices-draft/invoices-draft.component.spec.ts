import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesDraftComponent } from './invoices-draft.component';

describe('InvoicesDraftComponent', () => {
  let component: InvoicesDraftComponent;
  let fixture: ComponentFixture<InvoicesDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesDraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
