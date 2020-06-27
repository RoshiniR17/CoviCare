import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
   user : any={};
  constructor(private router:Router,public http:HttpClient,public alertController: AlertController) { }

  ngOnInit() {
  }
  Signup(){this.http.post("http://localhost:3000/signup",this.user,
  {headers:new HttpHeaders({"Content-Type":"application/json"})}).subscribe((response) => {
    console.log(response);
    if(response==="Invalid")
    {
      this.showAlert('Signup failed!','try agin!');
    }
    else if(response==="null")
    {
      this.showAlert('Invalid registration','Please fill in all the details');

    }
    else if (response==="new user"){
      this.router.navigate(['/login']);
    }
    
  
  })
}

async showAlert(h,m) {
  const alert = await this.alertController.create({
    
    header: h,
    
    message: m,
 
  });
  await alert.present();




    //this.router.navigate(['/login']);
  }
  
 
}
