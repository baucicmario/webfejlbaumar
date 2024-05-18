import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../../models/users.model'; // Import the User model

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User('', ''); // Initialize user object
  errorMessage: string = '';
  isLoggedIn: boolean = false; // Track login status

  constructor(private auth: Auth, private router: Router) {}

  login() {
    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Please enter email and password';
      return;
    }

    signInWithEmailAndPassword(this.auth, this.user.email, this.user.password)
      .then((userCredential: UserCredential) => {
        console.log('User logged in:', userCredential.user);
        this.isLoggedIn = true; // Set login status to true
        // Redirect to /electronics-management
        this.router.navigate(['/electronics-management']);
      })
      .catch(error => {
        console.error('Login failed:', error.message);
        this.errorMessage = error.message;
      });
  }
  logout() {
    signOut(this.auth).then(() => {
      console.log('User logged out');
      this.isLoggedIn = false; // Set login status to false
      // Redirect to login page or any other page as per your requirement
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Logout failed:', error.message);
    });
  }

}
