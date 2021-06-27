import { Component, OnInit } from '@angular/core';
import { MyBookingsDataService } from '../services/my-bookings-data.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  constructor(private myBookings: MyBookingsDataService) { }

  flightList = this.myBookings.products

  deleteRow(city: any) {
    for (let i = 0; i < this.flightList.length; ++i) {
      if (this.flightList[i].city === city) {
        this.flightList.splice(i, 1);
      }
    }
  }

  ngOnInit(): void {
  }

}
