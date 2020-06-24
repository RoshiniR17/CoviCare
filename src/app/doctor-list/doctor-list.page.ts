import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  
import {Router} from '@angular/router';
//import { NotificationsComponent } from '../notifications/notifications.component';  
//import { NotifyComponent } from '../notify/notify.component';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage {

  /*constructor(public popoverCtrl: PopoverController) {}
  async notifications(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: NotificationsComponent,  
        event: ev,  
        animated: true,  
        showBackdrop: true  
    }); */ 

    constructor(private router:Router) {}
  ngOnInit() {
  }
  doctor1(){
    this.router.navigate(['/doctor1']);
  }
  doctor2(){
    this.router.navigate(['/doctor2']);
  }




  
  /*   async notifiy2(ev: any) {  
     const popover2 = await this.popoverCtrl.create({  
         component: NotifyComponent,  
         event: ev,  
        animated: true,  
        showBackdrop: true  
     });


    return await popover.present();  */
  }  

  
  
