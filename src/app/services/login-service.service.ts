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

  // POST request
  login(login: Login): Observable<any> {
    return this.http.post(this.baseUrl + '/login', JSON.stringify(login), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
