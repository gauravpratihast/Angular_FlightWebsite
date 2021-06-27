import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

  constructor(private auth: AuthService, private route: Router) { }

  alert = false;
  login:boolean = false;

  ngOnInit(): void {
    // console.log(this.auth.authorizedUsers);
  }
  tabIndex = 0;
  logChange(index: any) {
    this.tabIndex = index;
  }
  onSubmit(form: NgForm){
    // console.log(form);
    let email = form.value.email;
    let password = form.value.password;
    // console.log(email, password);
    form.reset();
    this.auth.authorizedUsers.find(item => {
      if(email === item.email && password === item.password){
        this.auth.isloggedIn = true;
      }
    });
    if(this.auth.isloggedIn){
      this.route.navigate(['/flights']);
    }
    else{
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    }
  } 

  SignUp(form: NgForm){
    console.log(form);
    
  }

}
