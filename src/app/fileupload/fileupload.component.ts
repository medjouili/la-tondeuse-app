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

  fichier: File | null = null;
  resultat: string;

  constructor(private tondeuseService: TondeuseService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.fichier = input.files[0];
    }
  }

  upload() {
    if (this.fichier) {
      this.tondeuseService.uploadFile(this.fichier).subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.chargerFichier;
        },
        error: (error) => {
          console.error('Error uploading file', error);
        }
      });
    } else {
      console.error('No file selected');
    }
  }
  chargerFichier() {
    if (this.fichier) {
      this.tondeuseService.envoyerInstructions(this.fichier)
        .subscribe(response => {
          console.log('Réponse reçue', response);
          this.resultat = response as string;
        }, error => {
          console.error('Erreur lors de la soumission du fichier', error);
        });
    }
  
/* traiterFichier() {
  this.tondeuseService.obtenirPositionTondeuse().subscribe({
    next: (positionFinale) => {
      console.log('Position finale de la tondeuse:', positionFinale);
    },
    error: (error) => {
      console.error('Error during file processing', error);
    }
  });
}*/
}
}