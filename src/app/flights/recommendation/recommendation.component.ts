import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private flightsData : FlightsDataService,
              private SnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailArray = this.flightsData.fetchInRecommenadation(param.get('id'));
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
