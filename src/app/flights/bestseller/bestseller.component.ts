import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private flightsData: FlightsDataService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailArray = this.flightsData.fetchInBestSeller(param.get('id'));
    })
  }
  detailArray: any[] = [];
}
