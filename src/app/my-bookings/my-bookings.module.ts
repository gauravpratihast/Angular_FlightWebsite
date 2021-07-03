import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBookingsRoutingModule } from './my-bookings-routing.module';
import { MyBookingsComponent } from './my-bookings.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MyBookingsComponent
  ],
  imports: [
    CommonModule,
    MyBookingsRoutingModule,
    MaterialModule
  ]
})
export class MyBookingsModule { 
  constructor(){
    console.log('mybooking loads');
  }
}
