import { Component } from '@angular/core';
import { routes } from '../app-routing.module'; // Importing 'routes' from the routing module
import { Electronic } from '../models/electronics.model';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  basketItems: Electronic[] = [];
  isLoggedIn: boolean = false;

  routes = routes;
  constructor(private authGuard: AuthGuard) { }

  onItemAdded(item: Electronic) {
    this.basketItems.push(item);
    console.log('Item added to basket:', item);
    // You can perform further actions here, such as updating the total price
  }
  addToBasket(item: Electronic) {
    this.basketItems.push(item);
  }
}
