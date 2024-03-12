import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MowerService {
  constructor(private http: HttpClient) {}

  // Example method to get mower data from backend
  getMowerData() {
    return this.http.get('/api/mower');
  }
}