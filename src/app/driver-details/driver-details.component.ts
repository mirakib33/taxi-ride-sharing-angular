import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit{
  driverId: any;
  driverDetails: any;

  constructor(
    private route: ActivatedRoute,
    private driverService: DriverService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.driverId = this.route.snapshot.params['driverId'];

    this.getDriverDetails(this.driverId);

  }


  getDriverDetails(driverId:string) {
    this.driverService.getDriverById(driverId).subscribe(response => {
      this.driverDetails = response;
      this.router.navigateByUrl('/driverDetails/'+ driverId);
      },
      error => {
        console.error('Error ride request:', error); 
      }
    );
  }

}
