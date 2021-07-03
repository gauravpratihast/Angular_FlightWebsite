import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightsDataService } from '../services/flights-data.service';
import { MyBookingsDataService } from '../services/my-bookings-data.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit{

  constructor(private myBookings: MyBookingsDataService, 
              private flightsData: FlightsDataService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  RecommendationList = this.flightsData.RecommendationList;
  BestSellerList = this.flightsData.BestSellerList;
  FavouritesList = this.flightsData.FavouritesList;
  tabIndex = 0;

  logChange(index: any) {
    this.tabIndex = index;
  }

  showDeatil(id: any) {
    if (this.tabIndex === 0) {
      this.flightsData.fetchInRecommenadation(id);
    }
    else if (this.tabIndex === 1) {
      this.flightsData.fetchInBestSeller(id);
    }
    else {
      this.flightsData.fetchInFavourites(id);
    }
  }

  nameSearch = '';
  sortbyParam = 'price';
  sortbyOrder = 'asc';

  AddToMyBookings(item: any) {
    this.myBookings.AddingToCart(item);
    if (this.myBookings.count == 0) {
      this.snackBar.open('Flight added', 'Dismiss', {duration: 2000})
    }
    else {
      this.snackBar.open('Flight Already Exists','Dismiss', {duration: 2000})
      this.myBookings.count = 0;
    }
  }
  ngOnInit(): void {
  }
}
