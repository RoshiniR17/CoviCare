import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-doctor1',
  templateUrl: './doctor1.page.html',
  styleUrls: ['./doctor1.page.scss'],
})
export class Doctor1Page implements OnInit {

   
constructor(private router:Router) {}
//constructor(private emailComposer: EmailComposer) { }
ngOnInit() {
}
/*one(){
  let email = {
    to: 'max@mustermann.de',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
  
    subject: 'Patient Appointment',
    body: 'Hello Dr.Rao,I need an appointment on 20 June at 4:00pm',
    
  }
  
  this.emailComposer.open(email);
}*/
}