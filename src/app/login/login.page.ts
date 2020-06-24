import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any={};

  constructor(private router: Router,public http:HttpClient) { }

  ngOnInit() {
  }
  LogMeIn(){
    console.log(this.user);
      this.http.post("http://localhost:3000/login",this.user,
      {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {})
    //this.router.navigate(['/home']);
  }

  SignUp(){
    this.router.navigate(['/signup']);
  }
}
