import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSettingsComponent } from './tax-settings.component';

describe('TaxSettingsComponent', () => {
  let component: TaxSettingsComponent;
  let fixture: ComponentFixture<TaxSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
