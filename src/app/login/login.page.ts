import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any={};

  constructor(private router: Router,public http:HttpClient,public alertController: AlertController) { }

  ngOnInit() {
  }
  LogMeIn(){
    console.log(this.user,"Client: I am sending data to server for login");
      this.http.post("http://localhost:3000/login",this.user,
      {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
        console.log(response)
        if (response === null){
          this.showAlert('Log in failed!','Please enter both username and password');
        }else if (response === "false user") {
          this.showAlert('Log in failed!','Invalid user');
        }else if (response === "true user")
         {

          this.router.navigate(['/home']);
        };
      })
  }

  async showAlert(h,m) {
    const alert = await this.alertController.create({
      header: h,
      message: m,
    });

    await alert.present();
  }

  SignUp(){
    this.router.navigate(['/signup']);
  }
}

