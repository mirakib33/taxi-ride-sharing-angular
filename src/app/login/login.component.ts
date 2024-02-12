import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router
    ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      userType: ['passenger', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: Login = {
        email: this.loginForm.get('email')?.value,
        userType: this.loginForm.get('userType')?.value,
      };

      this.loginService.login(loginData).subscribe(response => {
            localStorage.setItem('session', JSON.stringify(response));
            this.router.navigate(['/home']);
            alert('Logged in Successfully!');
          },
          error => {
            console.error('Login error:', error); 
          }
        );
    } else {
      console.error('Invalid form data');
    }
  }

}
