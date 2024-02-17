import { Component, OnInit } from '@angular/core';
import { RideRequestListService } from '../services/ride-request-list.service';
import { FormBuilder } from '@angular/forms';
import { AvailableDriverService } from '../services/availavle-driver.service';
import { DriverService } from '../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';
import { Passenger } from '../models/passenger.model';

@Component({
  selector: 'app-ride-request-list',
  templateUrl: './ride-request-list.component.html',
  styleUrls: ['./ride-request-list.component.scss']
})
export class RideRequestListComponent implements OnInit{
  driverId: any;
  message: boolean = false;
  table: boolean = false;
  rides: any;
  passenger!: Passenger;
  modal: boolean = false;

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
    this.driverId = JSON.parse(localStorage.getItem('session') || '{}').driverId;
    this.getRidesByDriverId(this.driverId);
  }


  getRidesByDriverId(driverId: string) {
    this.rideRequestListService.getRidesByDriverId(driverId).subscribe(response => {
      if(response.length == 0) {
        this.message = true;
        this.table = false;
      } else {
        this.rides = response;
        this.table = true;
        this.message = false;
        this.modal = false;
      }
      },
      error => {
        console.error('Login error:', error); 
      }
    );
  }

  getPassengerDetails(passengerId: string) {
    this.passengerService.getPassengerById(passengerId).subscribe(response => {
      this.passenger = response;
      this.modal = true;
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }

  accept(rideId: string) {
    let body = {
      status: "Accepted"
    }
    this.rideRequestListService.updateStatusById(rideId, body).subscribe(response => {
      alert("Ride Accepted Successfully!");
      this.ngOnInit();
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }

  cancel(rideId: string) {
    let body = {
      status: "Cancelled"
    }
    this.rideRequestListService.updateStatusById(rideId, body).subscribe(response => {
      alert("Ride Cancelled Successfully!");
      this.ngOnInit();
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }

  start(rideId: string) {
    let body = {
      status: "Running"
    }
    this.rideRequestListService.updateStatusById(rideId, body).subscribe(response => {
      alert("Ride Started Successfully!")
      this.ngOnInit();
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }

  end(rideId: string) {
    let body = {
      status: "End"
    }
    this.rideRequestListService.updateStatusById(rideId, body).subscribe(response => {
      alert("Ride Ended Successfully!")
      this.ngOnInit();
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }
 

}
