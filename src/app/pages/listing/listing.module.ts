import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';
import { ListingPage } from './listing.page';

@NgModule({
  declarations: [ListingPage],
  imports: [BrowserModule, IonicModule.forRoot(), ListingPageRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [ListingPage]
  
})
export class ListingPageModule {}



