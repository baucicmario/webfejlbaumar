import { Component, OnInit } from '@angular/core';
import { Electronic } from '../../models/electronics.model';
import { ElectronicsService } from '../../services/electronics.service';

@Component({
  selector: 'app-electronics-management',
  templateUrl: './electronics-management.component.html',
  styleUrls: ['./electronics-management.component.css']
})
export class ElectronicsManagementComponent implements OnInit {
  electronicsList: Electronic[] = [];
  selectedElectronic: Electronic = {
    id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: ''
  };

  constructor(private electronicsService: ElectronicsService) { }

  ngOnInit(): void {
    this.loadElectronics();
  }

  loadElectronics() {
    this.electronicsService.getAllElectronics().subscribe(data => {
      this.electronicsList = data;
    });
  }

  selectElectronic(electronic: Electronic) {
    this.selectedElectronic = { ...electronic };
  }

  addElectronic() {
    this.electronicsService.addElectronic(this.selectedElectronic).then(() => {
      this.loadElectronics();
    });
    this.clearSelection();
  }

  updateElectronic() {
    this.electronicsService.updateElectronic(this.selectedElectronic).then(() => {
      this.loadElectronics();
    });
    this.clearSelection();
  }

  deleteElectronic(id: string) {
    this.electronicsService.deleteElectronic(id).then(() => {
      this.loadElectronics();
    });
    this.clearSelection();
  }

  clearSelection() {
    this.selectedElectronic = {
      id: '',
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: ''
    };
  }
}
