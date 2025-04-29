import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesSettingsComponent } from './invoices-settings.component';

describe('InvoicesSettingsComponent', () => {
  let component: InvoicesSettingsComponent;
  let fixture: ComponentFixture<InvoicesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
