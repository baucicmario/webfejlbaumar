import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ElectronicListComponent } from './electronics/electronic-list/electronic-list.component';
import { ElectronicDetailsComponent } from './electronics/electronic-details/electronic-details.component';
import { ElectronicsManagementComponent } from './electronics/electronics-management/electronics-management.component';
import { LoginComponent } from './users/login/login.component';

// Import Angular Material modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegistrationComponent } from './users/registration/registration.component';
import { BasketComponent } from './basket/basket.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ElectronicListComponent,
    ElectronicDetailsComponent,
    ElectronicsManagementComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    BasketComponent,
    LogoutComponent,
  ],
  imports: [
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({
      projectId: "webfejlesztes-b8342",
      appId: "1:858145060225:web:f3b4f16102c5fc024ce480",
      storageBucket: "webfejlesztes-b8342.appspot.com",
      apiKey: "AIzaSyDVR_ecMytp7M4wPZV21uYXQg1a3a_rAYk",
      authDomain: "webfejlesztes-b8342.firebaseapp.com",
      messagingSenderId: "858145060225"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
