import { Component, OnInit } from '@angular/core';
import { MatCardTitle } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private flightsData: FlightsDataService,
              private SnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailArray = this.flightsData.fetchInBestSeller(param.get('id'));
    })
  }

  counts = 0;
  booked(city: any){
    if(this.counts === 0){
      this.SnackBar.open('Flight For '+ city +' is Booked', 'Dismiss', {duration: 2000})
      this.counts +=1;
    }
    else{
      this.SnackBar.open('Booked Already', 'Dismiss', {duration: 2000});
    }
  }

  detailArray: any[] = [];
}
