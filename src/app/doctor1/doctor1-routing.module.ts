import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Doctor1Page } from './doctor1.page';

const routes: Routes = [
  {
    path: '',
    component: Doctor1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doctor1PageRoutingModule {}
