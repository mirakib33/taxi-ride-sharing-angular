import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideRequestListService {

  private baseUrl = 'http://localhost:8084/ride-service/api/ride';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getRidesByDriverId(driverId: string): Observable<any> {
    return this.http.get(this.baseUrl + '/driver/' + driverId).pipe(
      catchError(this.handleError)
    );
  }

  updateStatusById(rideId:string, body: any): Observable<any> {
    return this.http.put(this.baseUrl + '/update/driver/' + rideId, body).pipe(
      catchError(this.handleError)
    );
  }

  getRidesByPassengerId(passengerId: string): Observable<any> {
    return this.http.get(this.baseUrl + '/passenger/' + passengerId).pipe(
      catchError(this.handleError)
    );
  }


}
