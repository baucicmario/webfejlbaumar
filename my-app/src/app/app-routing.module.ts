import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicListComponent } from './electronics/electronic-list/electronic-list.component';
import { ElectronicDetailsComponent } from './electronics/electronic-details/electronic-details.component';
import { ElectronicsManagementComponent } from './electronics/electronics-management/electronics-management.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './users/registration/registration.component';
import { BasketComponent } from './basket/basket.component';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [
  { path: '', component: ElectronicListComponent },
  { path: 'electronics', component: ElectronicListComponent }, 
  { path: 'electronics/:id', component: ElectronicDetailsComponent },
  { path: 'electronics-management', component: ElectronicsManagementComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'basket', component: BasketComponent,  canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent,  canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export { routes };
