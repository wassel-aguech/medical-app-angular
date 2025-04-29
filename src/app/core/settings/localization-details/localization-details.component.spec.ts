import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationDetailsComponent } from './localization-details.component';

describe('LocalizationDetailsComponent', () => {
  let component: LocalizationDetailsComponent;
  let fixture: ComponentFixture<LocalizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
