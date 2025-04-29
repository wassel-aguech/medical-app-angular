import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvidentFundComponent } from './edit-provident-fund.component';

describe('EditProvidentFundComponent', () => {
  let component: EditProvidentFundComponent;
  let fixture: ComponentFixture<EditProvidentFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProvidentFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
