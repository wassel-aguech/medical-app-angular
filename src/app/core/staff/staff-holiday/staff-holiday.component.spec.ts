import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffHolidayComponent } from './staff-holiday.component';

describe('StaffHolidayComponent', () => {
  let component: StaffHolidayComponent;
  let fixture: ComponentFixture<StaffHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffHolidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
