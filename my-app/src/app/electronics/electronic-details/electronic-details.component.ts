import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Electronic } from '../../models/electronics.model';
import { ElectronicsService } from '../../services/electronics.service';

@Component({
  selector: 'app-electronic-details',
  templateUrl: './electronic-details.component.html',
  styleUrls: ['./electronic-details.component.css']
})
export class ElectronicDetailsComponent implements OnInit {
  electronic: Electronic | undefined;

  constructor(
    private route: ActivatedRoute,
    private electronicsService: ElectronicsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.electronicsService.getElectronicById(id)
          .then(electronic => this.electronic = electronic)
          .catch(error => console.error(error)); // Handle error gracefully
      }
    });
  } 
}
