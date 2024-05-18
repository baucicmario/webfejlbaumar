import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Electronic } from '../../models/electronics.model';
import { ElectronicsService } from '../../services/electronics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {
  electronics: Electronic[] = [];
  category: string = '';
  minPrice: number | undefined;
  maxPrice: number | undefined;
  @Output() electronicBought: EventEmitter<Electronic> = new EventEmitter<Electronic>(); // ehez tartozott volna a kosar de mar nem jutott ido ra :(


  constructor(
    private electronicsService: ElectronicsService,
    private router: Router
  ) {} // Inject ElectronicsService and Router

  ngOnInit(): void {
    this.loadElectronics();
  }

  async loadElectronics() {
    if (this.category && this.minPrice !== undefined && this.maxPrice !== undefined) {
      try {
        this.electronics = await this.electronicsService.getElectronicsByCategoryAndPriceRange(this.category, this.minPrice, this.maxPrice);
      } catch (error) {
        console.error('Error loading electronics:', error);
      }
    } else {
      try {
        this.electronics = await this.electronicsService.getElectronicsOrderedByPrice(10); // Default limit for demonstration
      } catch (error) {
        console.error('Error loading electronics:', error);
      }
    }
  }

  navigateToDetails(electronicId: string) {
    this.router.navigate(['/electronics', electronicId]);
  }

  buyElectronic(electronic: Electronic) {
    this.electronicBought.emit(electronic);
  }
  applyFilters() {
    this.loadElectronics();
  }
  
}
