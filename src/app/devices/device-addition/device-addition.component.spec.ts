import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAdditionComponent } from './device-addition.component';

describe('DeviceAdditionComponent', () => {
  let component: DeviceAdditionComponent;
  let fixture: ComponentFixture<DeviceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
