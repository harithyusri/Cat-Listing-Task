import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://catfact.ninja/breeds'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  cats() {
    return this.http.get(this.url);
  }
}
