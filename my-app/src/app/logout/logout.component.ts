import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private auth: Auth, private router: Router) {}

  logout() {
    signOut(this.auth).then(() => {
      console.log('User logged out');
      // Optionally redirect to the login page or another page
      this.router.navigate(['/home']);
    }).catch(error => {
      console.error('Logout failed:', error.message);
    });
  }
}
