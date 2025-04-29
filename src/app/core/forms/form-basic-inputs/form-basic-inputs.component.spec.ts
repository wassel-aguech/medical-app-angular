import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicInputsComponent } from './form-basic-inputs.component';

describe('FormBasicInputsComponent', () => {
  let component: FormBasicInputsComponent;
  let fixture: ComponentFixture<FormBasicInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasicInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBasicInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
