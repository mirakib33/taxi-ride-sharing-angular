import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = 'http://localhost:8082/billing-service/api/billing';

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

  // POST request
  payOnCash(body: any): Observable<any> {
    return this.http.post(this.baseUrl + '/pay', body).pipe(
      catchError(this.handleError)
    );
  }


}
