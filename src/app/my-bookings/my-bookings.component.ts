import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyBookingsDataService } from '../services/my-bookings-data.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  constructor(private myBookings: MyBookingsDataService, private snackBar: MatSnackBar) { }

  flightList = this.myBookings.products

  deleteRow(city: any) {
    for (let i = 0; i < this.flightList.length; ++i) {
      if (this.flightList[i].city === city) {
        this.flightList.splice(i, 1);
      }
    }
    this.snackBar.open('Flight Deleted', 'Dismiss', {duration: 2000});
  }

  ngOnInit(): void {
  }

}
