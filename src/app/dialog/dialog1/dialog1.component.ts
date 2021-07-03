import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightsDataService } from 'src/app/services/flights-data.service';



@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss']
})
export class Dialog1Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
              private flightData: FlightsDataService,
              private snackBar: MatSnackBar) { }

  id = this.data.value.id;
  city = this.data.value.city;
  price = this.data.value.price;
  tabIndex = this.data.tab;

  ngOnInit(): void {
  }

  saveChanges(city1: any, price1 : any){
    const city = city1;
    const price = price1;
    
    if(this.tabIndex === 0){
      this.flightData.fetchInRecommenadation(this.id)[0].city = city;
      this.flightData.fetchInRecommenadation(this.id)[0].price = price;
    }
    else if(this.tabIndex === 1){
      this.flightData.fetchInBestSeller(this.id)[0].city = city;
      this.flightData.fetchInBestSeller(this.id)[0].price = price;
    }
    else{
      this.flightData.fetchInFavourites(this.id)[0].city = city;
      this.flightData.fetchInFavourites(this.id)[0].price = price;
    }
    this.snackBar.open('Changes Saved Sucessfully', '', {duration: 2000})
  }
}
