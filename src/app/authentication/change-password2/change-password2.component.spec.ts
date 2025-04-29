import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassword2Component } from './change-password2.component';

describe('ChangePassword2Component', () => {
  let component: ChangePassword2Component;
  let fixture: ComponentFixture<ChangePassword2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePassword2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
