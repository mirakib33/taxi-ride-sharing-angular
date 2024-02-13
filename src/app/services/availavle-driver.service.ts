import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableDriverService {

  private baseUrl = 'http://localhost:8083/passenger-service/api/passenger';

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

  getAvailableDrivers(availableFrom: String, type: String): Observable<any> {
    return this.http.get(this.baseUrl + '/availableDrivers?availableFrom=' + availableFrom + '&type=' + type, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getFare( destination: String): Observable<any> {
    return this.http.get(this.baseUrl + '/fare?destination=' + destination, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  rideRequest(passengerId: String, driverId: String): Observable<any> {
    return this.http.get(this.baseUrl + '/rideRequest?passengerId=' + passengerId + '&driverId=' + driverId, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}