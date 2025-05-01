import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,

  ]
})
export class DoctorModule { }
