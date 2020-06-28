import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-dr-anand',
  templateUrl: './dr-anand.component.html',
  styleUrls: ['./dr-anand.component.scss'],
})
export class DrAnandComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  public docinfo={
    name: "Anandhi",
    email:"bookme2anandhi@gmail.com"
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
