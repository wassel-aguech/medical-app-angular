import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerticalComponent } from './form-vertical.component';

describe('FormVerticalComponent', () => {
  let component: FormVerticalComponent;
  let fixture: ComponentFixture<FormVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
