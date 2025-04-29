import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProvidentFundComponent } from './add-provident-fund.component';

describe('AddProvidentFundComponent', () => {
  let component: AddProvidentFundComponent;
  let fixture: ComponentFixture<AddProvidentFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProvidentFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
