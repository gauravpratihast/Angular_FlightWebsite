import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(data: NgForm){
    console.log(data.value);
    data.resetForm();
    this.snackBar.open('Thank you for booking', '', {duration: 2000})
  }

  // reset(data: NgForm){
  //   data.resetForm();
  // }

}
