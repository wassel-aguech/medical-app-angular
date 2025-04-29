import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryViewComponent } from './salary-view.component';

describe('SalaryViewComponent', () => {
  let component: SalaryViewComponent;
  let fixture: ComponentFixture<SalaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
