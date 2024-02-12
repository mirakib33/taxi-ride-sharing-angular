import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://localhost:8083/login-service/api';

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

  // GET request
  // get(endpoint: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${endpoint}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // POST request
  login(login: Login): Observable<any> {
    return this.http.post(this.baseUrl + '/login', JSON.stringify(login), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // PUT request
  // put(endpoint: string, data: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${endpoint}`, data).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // DELETE request
  // delete(endpoint: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${endpoint}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

}
