import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesGridComponent } from './invoices-grid.component';

describe('InvoicesGridComponent', () => {
  let component: InvoicesGridComponent;
  let fixture: ComponentFixture<InvoicesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
