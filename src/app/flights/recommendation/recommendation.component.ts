import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private flightsData : FlightsDataService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailArray = this.flightsData.fetchInRecommenadation(param.get('id'));
    })
  }
  detailArray: any[] = [];

}
