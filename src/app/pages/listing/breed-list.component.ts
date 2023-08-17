// breed-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BreedService } from './breed.service';

@Component({
  selector: 'app-breed-list',
  template: `
    <ion-grid>
      <ion-row>
        <ion-col>BREED</ion-col>
        <ion-col>ORIGIN</ion-col>
        <ion-col>DESCRIPTION</ion-col>
      </ion-row>
      <ion-row *ngFor="let breed of breeds">
        <ion-col>{{ breed.breed }}</ion-col>
        <ion-col>{{ breed.origin }}</ion-col>
        <ion-col>{{ breed.description }}</ion-col>
      </ion-row>
    </ion-grid>
  `,
})
export class BreedListComponent implements OnInit {
  breeds: any[] = [];

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.breedService.getBreeds().subscribe((response) => {
      this.breeds = response.data;
    });
  }
}
