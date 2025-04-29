import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorScheduleRoutingModule } from './doctor-schedule-routing.module';
import { DoctorScheduleComponent } from './doctor-schedule.component';


@NgModule({
  declarations: [
    DoctorScheduleComponent
  ],
  imports: [
    CommonModule,
    DoctorScheduleRoutingModule
  ]
})
export class DoctorScheduleModule { }
