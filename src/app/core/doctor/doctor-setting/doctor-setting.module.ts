import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorSettingRoutingModule } from './doctor-setting-routing.module';
import { DoctorSettingComponent } from './doctor-setting.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DoctorSettingComponent
  ],
  imports: [
    CommonModule,
    DoctorSettingRoutingModule,
    ReactiveFormsModule
  ]
})
export class DoctorSettingModule { }
