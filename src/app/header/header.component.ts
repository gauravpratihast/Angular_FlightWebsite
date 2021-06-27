import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  navList:any[]= [
    {
      boolean:'True',
      routerLink: '',
      navItem: 'Home'
    },
    {
      boolean:'False',
      routerLink: 'flights',
      navItem: 'Flights'
    },
    {
      boolean:'False',
      routerLink: 'mybookings',
      navItem: 'Saved Flights'
    },
    {
      boolean:'False',
      routerLink: 'login',
      navItem: 'LogIn'
    },
    {
      routerLink: '',
      navItem: 'Log Out'
    }
  ]



  logout(navItem:string){
    if(navItem==='Log Out'){
      // this.isLogIn = false;
      this.auth.isloggedIn = false;
    }
  }

  isVisible(navItem:string){
    if(this.auth.isloggedIn){
      if(navItem === 'LogIn'){
        return false;
      }
      return this.auth.isloggedIn;
    }
    else{
      if(navItem === 'Home' || navItem === 'LogIn'){
        return true;
      } 
      return false;
    }
  }
}
