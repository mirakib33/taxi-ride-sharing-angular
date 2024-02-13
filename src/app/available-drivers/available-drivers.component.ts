import { Component, OnInit } from '@angular/core';
import { AvailableDriverService } from '../services/availavle-driver.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  driverId: String = '';
  userInfo: any;
  rideMessage: any;
  passengerId: any;

  constructor(
    private fb: FormBuilder,
    private availableDriverService: AvailableDriverService,
  ) {
    this.availableDrivers = this.fb.group({
      availableFrom: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.passengerId = JSON.parse(localStorage.getItem('session') || '{}').passengerId;
    this.userInfo.driverId;

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
      } else {
        this.drivers = response;
        this.table = true;
      }
      },
      error => {
        console.error('Login error:', error); 
      }
    );
  }


  storeDriverId(driverId: String) {
    this.driverId = driverId;
  }



  getFare(destination: String) {
    this.availableDriverService.getFare(destination).subscribe(response => {
      this.fare = response;
      },
      error => {
        console.error('Error getting fare:', error); 
      }
    );
  }


  rideRequest() {
    this.availableDriverService.rideRequest(this.userInfo.passengerId, this.driverId).subscribe(response => {
      this.rideMessage = response;
      this.table = false;
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }


  getDriverDetails(driverId:String) {

  }


}
