import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUsersDetailsPageComponent } from './end-users-details-page.component';

describe('EndUsersDetailsPageComponent', () => {
  let component: EndUsersDetailsPageComponent;
  let fixture: ComponentFixture<EndUsersDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUsersDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUsersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
