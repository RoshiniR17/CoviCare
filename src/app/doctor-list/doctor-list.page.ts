import { Component, OnInit } from '@angular/core'; 
import {Router} from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from '../notifications/notifications.component';  
import { NotifyComponent } from '../notify/notify.component';
import { DrAnandComponent } from '../dr-anand/dr-anand.component';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage {

  constructor(private router:Router,public popoverCtrl: PopoverController) {}
  ngOnInit() {
  }
  gotohome(){
    this.router.navigate(['/home']);
  }
  gotologin(){
    this.router.navigate(['/login']);
  }
  async notifications(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: NotificationsComponent,  
        event: ev,  
        animated: true,  
        showBackdrop: true  
    });
    return await popover.present();
  }
  async notify(ev: any) {  
     const popover2= await this.popoverCtrl.create({  
        component: NotifyComponent,  
        event: ev,  
        animated: true,  
        showBackdrop: true  
     });
    return await popover2.present();
  }
  async notifyAnand(ev: any) {  
    const popover3= await this.popoverCtrl.create({  
       component: DrAnandComponent,  
       event: ev,  
       animated: true,  
       showBackdrop: true  
    });
   return await popover3.present();
  }  
}  

  
  
