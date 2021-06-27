import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { DetailComponent } from '../detail/detail.component';
import { FlightsDataService } from '../services/flights-data.service';
import { MyBookingsDataService } from '../services/my-bookings-data.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit, DoCheck {

  constructor(private myBookings: MyBookingsDataService, private flightsData: FlightsDataService, public dialog: MatDialog) { }

  openDialog() {
    console.log('dialog');
    this.dialog.open(AddFlightComponent);
  }

  detailDialog() {
    console.log('dialog Box');
    this.dialog.open(DetailComponent);
  }

  RecommendationList = this.flightsData.RecommendationList;
  BestSellerList = this.flightsData.BestSellerList;
  FavouritesList = this.flightsData.FavouritesList;
  tabIndex = 0;


  logChange(index: any) {
    this.tabIndex = index;
  }

  showDeatil(id: any) {
    if (this.tabIndex === 0) {
      console.log(this.flightsData.fetchInRecommenadation(id));
    }
    else if (this.tabIndex === 1) {
      console.log(this.flightsData.fetchInBestSeller(id));
    }
    else {
      console.log(this.flightsData.fetchInFavourites(id));
    }
  }

  nameSearch = '';
  sortbyParam = 'price';
  sortbyOrder = 'asc';

  alerts: any[] = [];
  delete: any[] = [];

  Delete(item: any) {
    if (this.tabIndex === 0) {
      let index = this.flightsData.RecommendationList.findIndex(x => x.id === item.id);
      this.flightsData.RecommendationList.splice(index, 1);
      if (!this.flightsData.RecommendationList.includes(item)) {
        this.delete.push({
          id: 1,
          type: 'success',
          message: 'Flight is Deleted.'
        });
        setTimeout(() => {
          this.closeDelete(this.delete);
        }, 2000);
      }
    }
    else if (this.tabIndex === 1) {
      let index = this.flightsData.BestSellerList.findIndex(x => x.id === item.id);
      this.flightsData.BestSellerList.splice(index, 1);
      if (!this.flightsData.BestSellerList.includes(item)) {
        this.delete.push({
          id: 1,
          type: 'success',
          message: 'Flight is Deleted.'
        });
        setTimeout(() => {
          this.closeDelete(this.delete);
        }, 2000);
      }
    }
    else {
      let index = this.flightsData.FavouritesList.findIndex(x => x.id === item.id);
      this.flightsData.FavouritesList.splice(index, 1);
      if (!this.flightsData.FavouritesList.includes(item)) {
        this.delete.push({
          id: 1,
          type: 'success',
          message: 'Flight is Deleted.'
        });
        setTimeout(() => {
          this.closeDelete(this.delete);
        }, 2000);
      }
    }
  }

  AddToMyBookings(item: any) {
    this.myBookings.AddingToCart(item);
    if (this.myBookings.count == 0) {
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Flight is added to your List.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 2000);
    }
    else {
      this.alerts.push({
        id: 2,
        type: 'warning',
        message: 'Flight already exist in your List.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 2000);
      this.myBookings.count = 0;
    }
  }

  public closeAlert(alert: any) {
    this.alerts.splice(0, this.alerts.length);
  }

  public closeDelete(deletes: any) {
    this.delete.splice(0, this.delete.length);
  }

  ngOnInit(): void {
  }
  ngDoCheck() {

  }
}
