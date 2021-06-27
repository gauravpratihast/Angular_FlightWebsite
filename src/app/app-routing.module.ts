import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellerComponent } from './flights/bestseller/bestseller.component';
import { FavouriteComponent } from './flights/favourite/favourite.component';
import { FlightsComponent } from './flights/flights.component';
import { RecommendationComponent } from './flights/recommendation/recommendation.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'flights', canActivate: [AuthGuard], children: [
    {path: '', component: FlightsComponent},
    {path: 'recommendation/:id', component: RecommendationComponent},
    {path: 'bestSeller/:id', component: BestsellerComponent},
    {path: 'favourites/:id', component: FavouriteComponent}
  ]},
  {path: 'mybookings', canActivate: [AuthGuard], component: MyBookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
