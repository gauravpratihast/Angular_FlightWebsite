import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightsDataService } from 'src/app/services/flights-data.service';
import { Dialog1Component } from '../../dialog/dialog1/dialog1.component';
import { AddFlightComponent } from '../../add-flight/add-flight.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private flightdata: FlightsDataService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  tabIndex=0;
  nameSearch = '';

  openDialog() {
    console.log('dialog');
    this.dialog.open(AddFlightComponent, {data: {tab: this.tabIndex}});
  }

  logChange(index: any) {
    this.tabIndex = index;
  }
  RecommendationList = this.flightdata.RecommendationList;
  BestSellerList = this.flightdata.BestSellerList;
  FavouritesList = this.flightdata.FavouritesList;

  Delete(data: any){
    if(this.tabIndex==0){
      let index = this.flightdata.RecommendationList.findIndex(x => x.id === data.id);
      this.flightdata.RecommendationList.splice(index, 1);
      this.snackBar.open('Flight Deleted', 'Dismiss', {duration: 2000})
    }
    else if(this.tabIndex==1){
      let index = this.flightdata.BestSellerList.findIndex(x => x.id === data.id);
      this.flightdata.BestSellerList.splice(index, 1);
      this.snackBar.open('Flight Deleted', 'Dismiss', {duration: 2000})
    }
    else{
      let index = this.flightdata.FavouritesList.findIndex(x => x.id === data.id);
      this.flightdata.FavouritesList.splice(index, 1);
      this.snackBar.open('Flight Deleted', 'Dismiss', {duration: 2000})
    }
  }

  openEditor(data: any){
    this.dialog.open(Dialog1Component, {data: {value: data, tab: this.tabIndex}});
  }
}
