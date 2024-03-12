import { Component } from '@angular/core';
import { TondeuseService } from '../services/tondeuse.service';


@Component({
  selector: 'app-instruction-control',
  templateUrl: './instruction-control.component.html',
  styleUrls: ['./instruction-control.component.scss']
})
export class InstructionControlComponent {
  constructor(private tondeuseService: TondeuseService) { }

  envoyerControl(instructions: any) {
    this.tondeuseService.envoyerInstructions(instructions).subscribe({
      next: (response) => {
  
        console.log('Instructions sent successfully', response);
      },
      error: (error) => {
        console.error('Error sending instructions', error);
      }
    });
  }
}
