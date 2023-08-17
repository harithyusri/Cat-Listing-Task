// breed.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  private apiUrl = 'https://catfact.ninja/breeds';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
