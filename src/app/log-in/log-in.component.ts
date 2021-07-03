import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private auth: AuthService,
    private route: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  login: boolean = false;
  typeOfUser = 'user';
  tabIndex = 0;

  logChange(index: any) {
    this.tabIndex = index;
  }
  onSubmit(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    form.resetForm();
    this.auth.authorizedUsers.find(item => {
      if (email === item.email && password === item.password) {
        this.auth.isloggedIn = true;
      }
      else {
        this.auth.isloggedIn = false;
      }
    });
    this.auth.admin.find(item => {
      if (email === item.email && password === item.password) {
        this.auth.adminloggedIn = true;
      }
      else {
        this.auth.adminloggedIn = false;
      }
    });
    if (this.auth.isloggedIn) {
      this.route.navigate(['/flights']);
      this.snackBar.open('User logged in', '', { duration: 2000 })
    }
    else if (this.auth.adminloggedIn) {
      this.route.navigate(['/admin']);
      this.snackBar.open('Admin logged in', '', { duration: 2000 });
    }
    else {
      this.snackBar.open('Wrong Credentials', '', { duration: 2000 })
    }
  }

  SignUp(form: NgForm) {
    // console.log(form);
    let username = form.value.username;
    let email = form.value.email;
    let password = form.value.password;
    let confirmpass = form.value.repassword;
    if (!form.valid) {
      this.snackBar.open('Fill the form', '', { duration: 2000 })
    }
    else {

      if (password === confirmpass) {
        form.resetForm();
        const new_user = [
          {
            username: username,
            email: email,
            password: password
          }
        ];
        if (this.typeOfUser === 'admin') {
          this.auth.admin.push(new_user[0]);
          this.snackBar.open('Admin registered', '', { duration: 2000 });
          new_user.splice(0, new_user.length);
        }
        else {
          this.auth.authorizedUsers.push(new_user[0]);
          this.snackBar.open('User registered', '', { duration: 2000 });
          new_user.splice(0, new_user.length);
        }
      }
      else {
        this.snackBar.open('Password didnot match', '', { duration: 2000 });
      }
    }
  }
}
