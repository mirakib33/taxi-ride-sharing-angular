import { Component, OnInit } from '@angular/core';
import { RideRequestListService } from '../services/ride-request-list.service';
import { PassengerService } from '../services/passenger.service';
import { FormBuilder } from '@angular/forms';
import { AvailableDriverService } from '../services/availavle-driver.service';
import { DriverService } from '../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingService } from '../services/billing.service';

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
  phone!:string;

  constructor(
    private rideRequestListService: RideRequestListService,
    private passengerService: PassengerService,
    private fb: FormBuilder,
    private availableDriverService: AvailableDriverService,
    private driverService: DriverService,
    private billingService: BillingService,
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

  getPhone(phone:string) {

  }

  payOnCash() {
    let body = {
      driverId: this.ride.driverId,
      passengerId: this.ride.passengerId,
      paymentMethod: "Cash",
      rideId: this.ride.rideId,
      amount: Math.round(this.ride.fare)
    }

    this.billingService.payOnCash(body).subscribe(response => {
      this.ngOnInit();
      alert("Bill Paid successfully");
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );

  }

  payOnMobile() {
    let body = {
      driverId: this.ride.driverId,
      passengerId: this.ride.passengerId,
      paymentMethod: "Mobile Banking",
      rideId: this.ride.rideId,
      amount: Math.round(this.ride.fare)
    }

    this.billingService.payOnCash(body).subscribe(response => {
      this.ngOnInit();
      alert("Bill Paid successfully");
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
      this.ngOnInit();
      alert("Ride Cancelled Successfully!");
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }


}
