import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingPipe } from "../../appPipes/searching.pipe";


@NgModule({
  declarations: [
    SearchingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
