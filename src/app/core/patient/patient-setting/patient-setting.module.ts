import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientSettingRoutingModule } from './patient-setting-routing.module';
import { PatientSettingComponent } from './patient-setting.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientSettingComponent
  ],
  imports: [
    CommonModule,
    PatientSettingRoutingModule,
    ReactiveFormsModule 
  ]
})
export class PatientSettingModule { }
