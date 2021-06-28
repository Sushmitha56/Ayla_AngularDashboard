import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndUsersListingComponent } from './end-users-listing/end-users-listing.component';
import { EndUsersDetailsPageComponent } from './end-users-details-page/end-users-details-page.component';
import { EndUsersAdditionComponent } from './end-users-addition/end-users-addition.component';



@NgModule({
  declarations: [
    EndUsersListingComponent,
    EndUsersDetailsPageComponent,
    EndUsersAdditionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EndUsersModule { }
