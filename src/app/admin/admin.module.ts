import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar"
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class AdminModule {
  constructor(){
    console.log('admin loads');
  }
 }
