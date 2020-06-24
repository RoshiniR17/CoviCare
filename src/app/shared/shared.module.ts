import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';


@NgModule({
  declarations: [ColumnOneComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
