import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesModule } from './devices/devices.module';
import { EndUsersModule } from './end-users/end-users.module';
// import { MaterialModule } from './material/material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevicesModule,
    EndUsersModule,
    // MaterialModule,
    DashboardModule,
    MatButtonModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule]
})
export class AppModule { }
