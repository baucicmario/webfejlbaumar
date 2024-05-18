import { Component, OnInit } from '@angular/core';
import { BasketItem } from '../models/basket.model';
import { Electronic } from '../models/electronics.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems: BasketItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateRandomElectronics();
  }

  generateRandomElectronics() {
    // Mock electronic items
    const electronics: Electronic[] = [
      { id: '1', name: 'Laptop', description: 'Powerful laptop', price: 999, imageUrl: 'laptop.jpg', category: 'Computers' },
      { id: '2', name: 'Smartphone', description: 'Latest smartphone', price: 699, imageUrl: 'smartphone.jpg', category: 'Mobile' },
      { id: '3', name: 'Tablet', description: 'High-performance tablet', price: 499, imageUrl: 'tablet.jpg', category: 'Mobile' },
      // Add more electronics as needed
    ];

    // Generate random quantities for each electronic
    electronics.forEach(electronic => {
      const quantity = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10
      this.basketItems.push({ electronic, quantity });
    });
  }
}
