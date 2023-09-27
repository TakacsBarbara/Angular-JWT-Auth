import { Component } from '@angular/core';
// import { AuthService } from './auth.service'; // You should create this service to manage authentication.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-jwt-app';

  isLoggedIn: boolean = false;

  // constructor(private authService: AuthService) {
    // this.authService.isAuthenticated().subscribe((loggedIn) => {
    //   this.isLoggedIn = loggedIn;
    // });
  // }

  // logout() {
  //   this.authService.logout();
  // }
}
