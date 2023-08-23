import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-listing',
  templateUrl: 'listing.page.html',
  styleUrls: ['listing.page.scss'],
})
export class ListingPage {
  cats: any;

  constructor(private catsData: ApiService) {
    this.catsData.cats().subscribe((data) => {
      console.log("data", data);
      this.cats = data;
    });
  }

  onSearchInputChange(event: any) {
    const searchTerm = event.detail.value.toLowerCase();
    this.cats.filter((cat: { breed: string; country: string; origin: string; coat: string; pattern: string; }) =>
      cat.breed.toLowerCase().includes(searchTerm) ||
      cat.country.toLowerCase().includes(searchTerm) ||
      cat.origin.toLowerCase().includes(searchTerm) ||
      cat.coat.toLowerCase().includes(searchTerm) ||
      cat.pattern.toLowerCase().includes(searchTerm)
    );
  }
}
