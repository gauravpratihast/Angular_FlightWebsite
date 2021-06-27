import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { FlightsComponent } from '../flights/flights.component';

@Injectable({
  providedIn: 'root'
})
export class FlightsDataService {

  constructor() { }

  fetchInRecommenadation(id: any){
    const list = this.RecommendationList.filter((Element: { id: any; })=>{
      return Element.id == id;
    })
    return list
  }
  fetchInBestSeller(id: any){
    const list = this.BestSellerList.filter((Element: { id: any; })=>{
      return Element.id == id;
    })
    return list
  }
  fetchInFavourites(id: any){
    const list = this.FavouritesList.filter((Element: { id: any; })=>{
      return Element.id == id;
    })
    return list
  }

  RecommendationList = [
    {
      id: 1,
      imageLink:'../../assets/images/newyork.jpg',
      city: 'New York',
      price: '63,403'
    },
    {
      id: 2,
      imageLink:'../../assets/images/california.jpg',
      city: 'California',
      price: '47,866'
    },
    {
      id: 3,
      imageLink:'../../assets/images/munich.jpg',
      city: 'Munich',
      price: '47,028'
    },
    {
      id: 4,
      imageLink:'../../assets/images/sanfransisco.jpg',
      city: 'San Fransisco',
      price: '64,453'
    },
    {
      id: 5,
      imageLink:'../../assets/images/toronoto.jpg',
      city: 'Toronoto',
      price: '83,691'
    },
    {
      id: 6,
      imageLink:'../../assets/images/london.jpg',
      city: 'London',
      price: '49,273'
    },
    {
      id: 7,
      imageLink:'../../assets/images/berlin.jpg',
      city: 'Berlin',
      price: '48,326'
    },
    {
      id: 8,
      imageLink:'../../assets/images/chichago.jpg',
      city: 'Chichago',
      price: '66,486'
    },
    {
      id: 9,
      imageLink:'../../assets/images/losAngeles.jpg',
      city: 'Los Angeles',
      price: '49,500'
    }
  ]

  BestSellerList = [
    {
      id: 1,
      imageLink:'../../assets/images/newyork.jpg',
      city: 'New York',
      price: '63,403'
    },
    {
      id: 2,
      imageLink:'../../assets/images/frankfurt.jpg',
      city: 'FrankFurt',
      price: '47,866'
    },
    {
      id: 3,
      imageLink:'../../assets/images/munich.jpg',
      city: 'Munich',
      price: '47,028'
    },
    {
      id: 4,
      imageLink:'../../assets/images/sanfransisco.jpg',
      city: 'San Fransisco',
      price: '64,453'
    },
    {
      id: 5,
      imageLink:'../../assets/images/toronoto.jpg',
      city: 'Toronoto',
      price: '83,691'
    },
    {
      id: 6,
      imageLink:'../../assets/images/detroit.jpg',
      city: 'Detroit',
      price: '83,562'
    },
    {
      id: 7,
      imageLink:'../../assets/images/houstan.jpg',
      city: 'Houstan',
      price: '76,628'
    },
    {
      id: 8,
      imageLink:'../../assets/images/dallas.jpg',
      city: 'Dallas',
      price: '78,524'
    },
    {
      id: 9,
      imageLink:'../../assets/images/washington.jpg',
      city: 'Washington D.C',
      price: '64,200'
    }
  ]

  FavouritesList = [
    {
      id: 1,
      imageLink:'../../assets/images/atlanta.jpg',
      city: 'Atlanta',
      price: '77,603'
    },
    {
      id: 2,
      imageLink:'../../assets/images/seattle.jpeg',
      city: 'Seattle',
      price: '64,942'
    },
    {
      id: 3,
      imageLink:'../../assets/images/zurich.jpeg',
      city: 'Zurich',
      price: '43,712'
    },
    {
      id: 4,
      imageLink:'../../assets/images/amestardam.jpg',
      city: 'Amsterdam',
      price: '44,881'
    },
    {
      id: 5,
      imageLink:'../../assets/images/toronoto.jpg',
      city: 'Toronoto',
      price: '83,691'
    },
    {
      id: 6,
      imageLink:'../../assets/images/london.jpg',
      city: 'London',
      price: '49,273'
    },
    {
      id: 7,
      imageLink:'../../assets/images/berlin.jpg',
      city: 'Berlin',
      price: '48,326'
    },
    {
      id: 8,
      imageLink:'../../assets/images/chichago.jpg',
      city: 'Chichago',
      price: '66,486'
    },
    {
      id: 9,
      imageLink:'../../assets/images/denver.jpg',
      city: 'Denver',
      price: '49,500'
    }
  ]
}
