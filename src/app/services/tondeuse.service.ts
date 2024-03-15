import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TondeuseService {
  private apiUrl = 'http://localhost:8080/executerInstructions'; 

  constructor(private http: HttpClient) { }

  uploadFile(fichier: File): Observable<HttpResponse<any>> {
    const formData = new FormData();
    formData.append('fichier', fichier, fichier.name);
    const httpOptions = {
      headers: new HttpHeaders({
        // Les en-têtes nécessaires seront automatiquement définis par le navigateur
      })
    };
    
    //return this.http.post(this.apiUrl, formData, httpOptions);
    return this.http.post<any>(this.apiUrl, formData,  httpOptions);
    
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