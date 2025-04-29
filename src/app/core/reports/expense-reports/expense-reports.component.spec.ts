import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseReportsComponent } from './expense-reports.component';

describe('ExpenseReportsComponent', () => {
  let component: ExpenseReportsComponent;
  let fixture: ComponentFixture<ExpenseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
