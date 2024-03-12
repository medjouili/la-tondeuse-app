import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TondeuseService {
  private apiUrl = 'http://localhost:8080/executerInstructions'; 

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('fichier', file, file.name);

    return this.http.post(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );
  }
  envoyerInstructions(instructions: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/control`, instructions)
      .pipe(catchError(this.handleError));
  }

  obtenirPositionTondeuse(): Observable<any> {
    return this.http.get(`${this.apiUrl}/position`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    // Gestion simple des erreurs.
    if (error.status === 0) {
      console.error('Une erreur est survenue:', error.error);
    } else {
      console.error(
        `Le serveur a retourné le code ${error.status}, ` +
        `corps était: `, error.error);
    }
    return throwError(() => new Error('Quelque chose de mal s\'est produit; veuillez réessayer plus tard.'));
  }
}