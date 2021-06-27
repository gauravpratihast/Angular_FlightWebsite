import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FlightsComponent } from './flights/flights.component';
import { SearchingPipe } from './appPipes/searching.pipe';
import { SortPipe } from './appPipes/sort.pipe';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MaterialModule } from './material/material.module';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DetailComponent } from './detail/detail.component';
import { RecommendationComponent } from './flights/recommendation/recommendation.component';
import { BestsellerComponent } from './flights/bestseller/bestseller.component';
import { FavouriteComponent } from './flights/favourite/favourite.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    HeaderComponent,
    FooterComponent,
    FlightsComponent,
    SearchingPipe,
    SortPipe,
    MyBookingsComponent,
    AddFlightComponent,
    DetailComponent,
    RecommendationComponent,
    BestsellerComponent,
    FavouriteComponent
    ],
    entryComponents: [AddFlightComponent, DetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
