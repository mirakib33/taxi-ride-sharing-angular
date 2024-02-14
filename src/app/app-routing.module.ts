import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AvailableDriversComponent } from './available-drivers/available-drivers.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

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
    path : "driverDetails/:driverId",
    component : DriverDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
