import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { MaterialModule } from '../material/material.module';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SortPipe } from '../appPipes/sort.pipe';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SearchingPipe } from '../appPipes/searching.pipe';

@NgModule({
  declarations: [
    FlightsComponent,
    BestsellerComponent,
    RecommendationComponent,
    FavouriteComponent,
    SearchingPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlightsRoutingModule,
  ]
})
export class FlightsModule {
  constructor(){
    console.log('flights loads');
  }
 }
