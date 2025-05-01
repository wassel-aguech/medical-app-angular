import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorProfileRoutingModule } from './doctor-profile-routing.module';
import { DoctorProfileComponent } from './doctor-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    DoctorProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class DoctorProfileModule { }
