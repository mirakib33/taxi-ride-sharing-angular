import { Component, OnInit } from '@angular/core';
import { AvailableDriverService } from '../services/availavle-driver.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RideRequest } from '../models/ride-request.model';
import { RideRequestListService } from '../services/ride-request-list.service';

@Component({
  selector: 'app-available-drivers',
  templateUrl: './available-drivers.component.html',
  styleUrls: ['./available-drivers.component.scss']
})
export class AvailableDriversComponent implements OnInit{

  userLocation: any;
  drivers!: any;
  fare: any;
  message: boolean = false;
  destination!: string;

  availableDrivers: FormGroup;
  table: boolean = false;
  driverId: string = '';
  rideMessage: any;
  passengerId: any;
  driverDetails: any;
  modal: boolean = false;
  search: boolean = true;
  ride!: any;

  constructor(
    private fb: FormBuilder,
    private rideRequestListService: RideRequestListService,
    private availableDriverService: AvailableDriverService,
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.availableDrivers = this.fb.group({
      availableFrom: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.passengerId = JSON.parse(localStorage.getItem('session') || '{}').passengerId;

    this.getRidesByPassengerId(this.passengerId);

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.userLocation = {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //       };
    //       console.log(position)
    //     },
    //     (error) => {
    //       console.error('Error getting location:', error);
    //     }
    //   );
    // } else {
    //   console.log('Geolocation not supported');
    // }
  }

  searchDrivers() {
    this.availableDriverService.getAvailableDrivers(this.availableDrivers.value).subscribe(response => {
      if(response.length == 0) {
        this.message = true;
        this.table = false;
      } else {
        this.drivers = response;
        this.table = true;
        this.message = false;
      }
      },
      error => {
        console.error('Login error:', error); 
      }
    );
  }


  storeDriverId(driverId: string) {
    this.driverId = driverId;
  }



  getFare(destination: string) {
    this.availableDriverService.getFare(destination).subscribe(response => {
      this.fare = Math.round(response);
      },
      error => {
        console.error('Error getting fare:', error); 
      }
    );
  }


  rideRequest() {
    let rideRequest: RideRequest = {
      passengerId: this.passengerId,
      driverId: this.driverId
    }
    this.availableDriverService.rideRequest(rideRequest).subscribe(response => {
      this.table = false;
      alert("Ride requested successfully.")
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }


  getDriverDetails(driverId:string) {
    this.driverService.getDriverById(driverId).subscribe(response => {
      this.driverDetails = response;
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
      // this.router.navigateByUrl('/driverDetails/'+ driverId);
  }

  getRidesByPassengerId(passengerId: string) {
    this.rideRequestListService.getRidesByPassengerId(passengerId).subscribe(response => {
      if(response != null) {
        this.search = false;
      } else {
        this.ride = response;
      }
      },
      error => {
        console.error('Login error:', error); 
      }
    );
  }


  cancel(rideId: string) {
    let body = {
      status: "Cancelled"
    }
    this.rideRequestListService.updateStatusById(rideId, body).subscribe(response => {
      alert("Ride Accepted Successfully!");
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }


}
