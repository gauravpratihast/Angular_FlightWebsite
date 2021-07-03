import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: FlightsComponent},
    {path: 'recommendation/:id', component: RecommendationComponent},
    {path: 'bestSeller/:id', component: BestsellerComponent},
    {path: 'favourites/:id', component: FavouriteComponent},
    {path: 'booking', component: BookingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
