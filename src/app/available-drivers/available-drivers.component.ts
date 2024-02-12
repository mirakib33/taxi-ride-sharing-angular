import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-drivers',
  templateUrl: './available-drivers.component.html',
  styleUrls: ['./available-drivers.component.scss']
})
export class AvailableDriversComponent implements OnInit{

  userLocation: any;

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

  searchDrivers() {}



}
