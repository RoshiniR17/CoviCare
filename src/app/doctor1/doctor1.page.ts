import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpService } from "../Shared/http.service";

@Component({
  selector: 'app-doctor1',
  templateUrl: './doctor1.page.html',
  styleUrls: ['./doctor1.page.scss'],
})
export class Doctor1Page implements OnInit {
loading = false;
buttonText = "Submit";
   
constructor(private router:Router,private alertController:AlertController, public http: HttpService) {}

  
ngOnInit() {
  //console.log(this.http.test);
}
/*async oneAlert() {
  await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Enter your details',
    inputs: [
      {
        name: 'Email',
        type: 'email',
        placeholder: 'enter your email id here'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (giv) => {
          console.log('Confirm Ok');
          this.loading = true;
          this.buttonText = "Submiting...";
          let user = {
             email: giv.Email
          }
          this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
          data => {
            let res:any = data; 
            console.log(
            'mail has been sent successfully'
              );
          },
          err => {
          console.log(err);
            this.loading = false;
            this.buttonText = "Submit";
          },() => {
            this.loading = false;
            this.buttonText = "Submit";
          }
          );
        }
      }
    ]
  }).then(giv=>giv.present());
}*/
}