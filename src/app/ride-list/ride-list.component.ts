import { Component, OnInit } from '@angular/core';
import { RideRequestListService } from '../services/ride-request-list.service';
import { PassengerService } from '../services/passenger.service';
import { FormBuilder } from '@angular/forms';
import { AvailableDriverService } from '../services/availavle-driver.service';
import { DriverService } from '../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss']
})
export class RideListComponent implements OnInit{
  passengerId: any;
  message: boolean = false;
  currentRide: boolean = false;
  ride!: any;
  driver!: any;

  constructor(
    private rideRequestListService: RideRequestListService,
    private passengerService: PassengerService,
    private fb: FormBuilder,
    private availableDriverService: AvailableDriverService,
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.passengerId = JSON.parse(localStorage.getItem('session') || '{}').passengerId;
    this.getRidesByPassengerId(this.passengerId);
  }

  getRidesByPassengerId(passengerId: string) {
    this.rideRequestListService.getRidesByPassengerId(passengerId).subscribe(response => {
      if(response == undefined || response == null) {
        this.message = true;
      } else {
        this.getDriverDetails(response.driverId);
        this.ride = response;
        this.currentRide = true;
      }
      },
      error => {
        console.error('Login error:', error); 
      }
    );
  }

  getDriverDetails(driverId:string) {
    this.driverService.getDriverById(driverId).subscribe(response => {
      this.driver = response;
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }

}
