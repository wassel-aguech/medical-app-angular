import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaffComponent } from './edit-staff.component';

describe('EditStaffComponent', () => {
  let component: EditStaffComponent;
  let fixture: ComponentFixture<EditStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
