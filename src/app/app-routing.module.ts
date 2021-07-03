import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]},
  {path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule), canActivate: [AuthGuard]},
  {path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canActivate: [AuthGuard]},
  // {path: 'flights', canActivate: [AuthGuard], children: [
    //   {path: '', component: FlightsComponent},
    //   {path: 'recommendation/:id', component: RecommendationComponent},
    //   {path: 'bestSeller/:id', component: BestsellerComponent},
    //   {path: 'favourites/:id', component: FavouriteComponent}
    // ]},
    {path: 'mybookings', loadChildren: () => import('./my-bookings/my-bookings.module').then(m => m.MyBookingsModule), canActivate: [AuthGuard]},
    {path: 'login', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule)}
  // {path: 'mybookings', canActivate: [AuthGuard], component: MyBookingsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
