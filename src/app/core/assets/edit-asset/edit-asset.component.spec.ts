import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssetComponent } from './edit-asset.component';

describe('EditAssetComponent', () => {
  let component: EditAssetComponent;
  let fixture: ComponentFixture<EditAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
