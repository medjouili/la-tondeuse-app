import { Component } from '@angular/core';
import { TondeuseService } from '../services/tondeuse.service';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {

  selectedFile: File | null = null;

  constructor(private tondeuseService: TondeuseService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];
    }
  }

  upload() {
    if (this.selectedFile) {
      this.tondeuseService.uploadFile(this.selectedFile).subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.traiterFichier();
        },
        error: (error) => {
          console.error('Error uploading file', error);
        }
      });
    } else {
      console.error('No file selected');
    }
  }
  
traiterFichier() {
  this.tondeuseService.obtenirPositionTondeuse().subscribe({
    next: (positionFinale) => {
      console.log('Position finale de la tondeuse:', positionFinale);
    },
    error: (error) => {
      console.error('Error during file processing', error);
    }
  });
}
}