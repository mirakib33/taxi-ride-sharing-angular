import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AvailableDriversComponent } from './available-drivers/available-drivers.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { RideRequestListComponent } from './ride-request-list/ride-request-list.component';
import { RideListComponent } from './ride-list/ride-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AvailableDriversComponent,
    RideRequestsComponent,
    NavbarComponent,
    DriverDetailsComponent,
    RideRequestListComponent,
    RideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
