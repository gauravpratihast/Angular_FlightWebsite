import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    MatToolbarModule
  ]
})
export class BookingModule {
  constructor(){
    console.log('booking module loads')
  }
 }
