import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  radioList:any = [
    {
      id: 1,
      text: 'Return'
    },
    {
      id: 2,
      text: 'One Way'
    },
    {
      id: 3,
      text: 'Multi City'
    }
  ]

  inputList: any = [
    {
      inputType: 'text',
      content: 'From',
      placeholder: 'New York, NY'
    },
    {
      inputType: 'text',
      content: 'To',
      placeholder: 'California, CA'
    },
    {
      inputType: 'date',
      content: 'Depart',
      placeholder: 'Depart'
    },
    {
      inputType: 'date',
      content: 'Return',
      placeholder: 'Return'
    },
  ]

  selectListOptions: any =[
    {
      id: 1,
      text: 'Economy Class'
    },
    {
      id: 2,
      text: 'Premium Economy Class'
    },
    {
      id: 3,
      text: 'Business Class'
    },
    {
      id: 4,
      text: 'First Class'
    }
  ]

  serviceList:any =[
    {
      icon: '../../assets/images/patch-check-fill.svg',
      heading: 'Price Match Service',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, consectetur.'
    },
    {
      icon: '../../assets/images/booking.jpg',
      heading: 'Easy Booking',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, consectetur.'
    },
    {
      icon: '../../assets/images/customerService.png',
      heading: '24/7 Customer Service',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, consectetur.'
    },
  ]

}
