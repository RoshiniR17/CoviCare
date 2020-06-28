import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from "../Shared/http.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  patient: any={};
  loading = false;
  buttonText = "Submit";
  mydate= new Date().toISOString();
  constructor(private modalController: ModalController, public http: HttpService) { }
  @Input() public docinfo: any={};
  ngOnInit() {
    console.log(this.http.test);
  }
  dateChanged(date){
    this.mydate=date.detail.value;
    console.log(this.mydate);
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  mail(){
    this.loading = true;
    this.buttonText = "Submiting...";
    let doc={
      name: this.docinfo.name,
      email:this.docinfo.email,
      date: this.mydate,
      sub: "Appointment scheduled from CovidCare-reg",
    }
    let user = {
      name: this.patient.name,
      age: this.patient.age,
      mobile:this.patient.mobile,
      email: this.patient.email,
      docname:this.docinfo.name,
      date: this.mydate,
      sub: "Appointment confirmation-reg",
    }
    console.log(user);
    console.log(doc);
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
    this.http.sendEmail("http://localhost:3000/sendmail", doc).subscribe(
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
