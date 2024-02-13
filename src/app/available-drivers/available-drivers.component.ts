import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-drivers',
  templateUrl: './available-drivers.component.html',
  styleUrls: ['./available-drivers.component.scss']
})
export class AvailableDriversComponent implements OnInit{

  userLocation: any;
  drivers!: any;
  fare: any;

  constructor(
    private AvailableDriverService availableDriverService,
  ) {

  }

  ngOnInit() {
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

  searchDrivers(availableFrom: String, type: String) {
    this.availableDriverService.getAvailableDrivers(availableFrom: String, type: String).subscribe(response => {
      let drivers = response;
    },
    error => {
      console.error('Login error:', error); 
    }
  );
} else {
console.error('Invalid form data');
}
  }


  getFare(destination: String) {
    this.availableDriverService.getAvailableDrivers(destination: String).subscribe(response => {
      let fare = response;
    },
    error => {
      console.error('Error getting fare:', error); 
    }
  );
} else {
console.error('Invalid form data');
}
  }


  rideRequest(passengerId: String, driverId: String) {
    this.availableDriverService.getAvailableDrivers(passengerId: String, driverId: String).subscribe(response => {
      let message = response;
    },
    error => {
      console.error('Error ride request:', error); 
    }
  );
} else {
console.error('Invalid form data');
}
  }


}
