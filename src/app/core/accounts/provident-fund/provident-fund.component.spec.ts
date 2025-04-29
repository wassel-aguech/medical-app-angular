import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidentFundComponent } from './provident-fund.component';

describe('ProvidentFundComponent', () => {
  let component: ProvidentFundComponent;
  let fixture: ComponentFixture<ProvidentFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidentFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
