import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsDataService } from 'src/app/services/flights-data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private flightsData: FlightsDataService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.detailArray = this.flightsData.fetchInFavourites(param.get('id'));
    })
  }
detailArray: any[]= []
}
