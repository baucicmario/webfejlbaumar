import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './app-routing.module'; // Importing 'routes' from the routing module
import { Electronic } from './models/electronics.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes = routes;

  constructor(private router: Router) {}

  onModuleChange(event: Event) {
    const path = (event.target as HTMLSelectElement).value;
    this.router.navigateByUrl(path);
  }

  
}
