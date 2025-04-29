import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSettingComponent } from './doctor-setting.component';

describe('DoctorSettingComponent', () => {
  let component: DoctorSettingComponent;
  let fixture: ComponentFixture<DoctorSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
