import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { RideRequest } from '../models/ride-request.model';

@Injectable({
  providedIn: 'root'
})
export class AvailableDriverService {

  private baseUrl = 'http://localhost:8080/passenger-service/api/passenger';

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

  getAvailableDrivers(params: any): Observable<any> {
    return this.http.get(this.baseUrl + '/availableDrivers', {params}).pipe(
      catchError(this.handleError)
    );
  }

  getFare( destination: string): Observable<any> {
    let params = new HttpParams().set('destination', destination);
    return this.http.get(this.baseUrl + '/fare', {params}).pipe(
      catchError(this.handleError)
    );
  }

  rideRequest(rideRequest: RideRequest): Observable<any> {
    return this.http.post(this.baseUrl + '/rideRequest', rideRequest, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

}