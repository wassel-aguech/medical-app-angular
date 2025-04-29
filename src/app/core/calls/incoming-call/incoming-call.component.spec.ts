import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingCallComponent } from './incoming-call.component';

describe('IncomingCallComponent', () => {
  let component: IncomingCallComponent;
  let fixture: ComponentFixture<IncomingCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
