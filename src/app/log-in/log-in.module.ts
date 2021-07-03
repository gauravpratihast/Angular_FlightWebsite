import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInComponent } from '../log-in/log-in.component';
import { LogInRoutingModule } from "./log-in-routing.module";
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LogInRoutingModule,
    MatToolbarModule

  ]
})
export class LogInModule { 
  constructor(){
    console.log('log in loaded');
  }
}
