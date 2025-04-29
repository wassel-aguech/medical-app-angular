import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSettingComponent } from './staff-setting.component';

describe('StaffSettingComponent', () => {
  let component: StaffSettingComponent;
  let fixture: ComponentFixture<StaffSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
