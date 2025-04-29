import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCallComponent } from './voice-call.component';

describe('VoiceCallComponent', () => {
  let component: VoiceCallComponent;
  let fixture: ComponentFixture<VoiceCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
