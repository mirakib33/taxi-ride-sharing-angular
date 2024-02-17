import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AvailableDriversComponent } from './available-drivers/available-drivers.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { RideRequestListComponent } from './ride-request-list/ride-request-list.component';
import { RideListComponent } from './ride-list/ride-list.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "availableDrivers",
    component : AvailableDriversComponent
  },
  {
    path : "driver-details",
    component : DriverDetailsComponent
  },
  {
    path : "rides",
    component : RideRequestListComponent
  },
  {
    path : "ride-list",
    component : RideListComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
