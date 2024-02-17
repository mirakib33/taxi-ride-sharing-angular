import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('session');
  }

  isPassenger(): boolean {
    const session = localStorage.getItem('session');
    if (session) {
        const sessionData = JSON.parse(session);
        if (sessionData && sessionData.passengerId) {
            return true;
        }
    }
    return false;
}

isDriver(): boolean {
  const session = localStorage.getItem('session');
  if (session) {
      const sessionData = JSON.parse(session);
      if (sessionData && sessionData.driverId) {
          return true;
      }
  }
  return false;
}

  logout() {
    localStorage.removeItem('session');
    alert('Logged out successfully!');
    this.router.navigateByUrl('/login');
  }

}
