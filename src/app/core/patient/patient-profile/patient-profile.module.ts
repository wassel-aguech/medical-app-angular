import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientProfileRoutingModule } from './patient-profile-routing.module';
import { PatientProfileComponent } from './patient-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    PatientProfileRoutingModule,
    SharedModule
  ]
})
export class PatientProfileModule { }
