import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientSettingRoutingModule } from './patient-setting-routing.module';
import { PatientSettingComponent } from './patient-setting.component';


@NgModule({
  declarations: [
    PatientSettingComponent
  ],
  imports: [
    CommonModule,
    PatientSettingRoutingModule
  ]
})
export class PatientSettingModule { }
