import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUsersAdditionComponent } from './end-users-addition.component';

describe('EndUsersAdditionComponent', () => {
  let component: EndUsersAdditionComponent;
  let fixture: ComponentFixture<EndUsersAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUsersAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUsersAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
