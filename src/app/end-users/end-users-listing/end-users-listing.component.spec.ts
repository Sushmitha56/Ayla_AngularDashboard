import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUsersListingComponent } from './end-users-listing.component';

describe('EndUsersListingComponent', () => {
  let component: EndUsersListingComponent;
  let fixture: ComponentFixture<EndUsersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUsersListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUsersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
