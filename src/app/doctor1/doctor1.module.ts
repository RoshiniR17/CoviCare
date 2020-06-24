import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Doctor1PageRoutingModule } from './doctor1-routing.module';

import { Doctor1Page } from './doctor1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Doctor1PageRoutingModule
  ],
  declarations: [Doctor1Page]
})
export class Doctor1PageModule {}
