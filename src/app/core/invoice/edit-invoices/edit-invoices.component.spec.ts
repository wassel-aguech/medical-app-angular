import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoicesComponent } from './edit-invoices.component';

describe('EditInvoicesComponent', () => {
  let component: EditInvoicesComponent;
  let fixture: ComponentFixture<EditInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
