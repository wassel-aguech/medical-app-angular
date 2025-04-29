import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorProfileRoutingModule } from './doctor-profile-routing.module';
import { DoctorProfileComponent } from './doctor-profile.component';


@NgModule({
  declarations: [
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    DoctorProfileRoutingModule
  ]
})
export class DoctorProfileModule { }
