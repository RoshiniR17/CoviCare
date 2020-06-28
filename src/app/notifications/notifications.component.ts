import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  public docinfo={
    name: "Floyd",
    email:"bookme2floyd@gmail.com"
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        docinfo: this.docinfo
      }
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      console.log('Sending: ', this.docinfo);
    });
  }
}
