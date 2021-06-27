import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorizedUsers:any[] =[
    {
      username: 'Gaurav',
      email: 'gp@21',
      password: '123456'
    }
  ]

  isloggedIn = false;

}
