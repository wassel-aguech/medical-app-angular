import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoSettingsComponent } from './seo-settings.component';

describe('SeoSettingsComponent', () => {
  let component: SeoSettingsComponent;
  let fixture: ComponentFixture<SeoSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
