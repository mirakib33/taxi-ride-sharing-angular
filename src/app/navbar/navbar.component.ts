import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('session');
  }

  logout() {
    localStorage.removeItem('session');
    alert('Logged out successfully!');
  }

}
