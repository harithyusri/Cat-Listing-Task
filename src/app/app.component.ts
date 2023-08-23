import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cat Listing', url: 'listing', icon: 'grid' },
    { title: 'Log Out', url: '/folder/outbox', icon: 'log-out' },
  ];
}