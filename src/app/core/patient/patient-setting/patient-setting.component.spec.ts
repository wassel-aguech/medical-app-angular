import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSettingComponent } from './patient-setting.component';

describe('PatientSettingComponent', () => {
  let component: PatientSettingComponent;
  let fixture: ComponentFixture<PatientSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
