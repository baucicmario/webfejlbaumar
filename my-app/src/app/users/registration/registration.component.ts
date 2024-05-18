import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Registration } from '../../models/registration.model'; // Import the Registration model

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registration: Registration = new Registration('', '', ''); // Initialize registration object
  errorMessage: string = '';

  constructor(private auth: Auth) {}

  register() {
    if (!this.registration.email || !this.registration.password || !this.registration.confirmPassword) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.registration.password !== this.registration.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    createUserWithEmailAndPassword(this.auth, this.registration.email, this.registration.password)
      .then((userCredential: UserCredential) => {
        console.log('User registered:', userCredential.user);
        // Redirect or perform other actions after successful registration
      })
      .catch(error => {
        console.error('Registration failed:', error.message);
        this.errorMessage = error.message;
      });
  }
}
