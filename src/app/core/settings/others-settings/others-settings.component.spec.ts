import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersSettingsComponent } from './others-settings.component';

describe('OthersSettingsComponent', () => {
  let component: OthersSettingsComponent;
  let fixture: ComponentFixture<OthersSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
