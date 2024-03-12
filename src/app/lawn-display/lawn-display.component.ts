import { Component, Input, OnInit } from '@angular/core';
import { TondeuseService } from '../services/tondeuse.service';

@Component({
  selector: 'app-lawn-display',
  templateUrl: './lawn-display.component.html',
  styleUrls: ['./lawn-display.component.scss']
})
export class LawnDisplayComponent implements OnInit {
  positionTondeuse: any; 

  constructor(private tondeuseService: TondeuseService) { }

  ngOnInit() {
    this.tondeuseService.obtenirPositionTondeuse().subscribe({
      next: (position) => {
        this.positionTondeuse = position;
      },
      error: (error) => {
  
      }
    });
  }
// @Input() lawnSize: { width: 0; height: 0; } = { width: 0, height: 0 };
  //@Input() mowers: Array<{ x: 0; y: 0; direction: "N"; }> = [{ x: 0, y: 0, direction: "N" }];
}

