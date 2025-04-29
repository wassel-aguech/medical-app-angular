import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputGroupsComponent } from './form-input-groups.component';

describe('FormInputGroupsComponent', () => {
  let component: FormInputGroupsComponent;
  let fixture: ComponentFixture<FormInputGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
