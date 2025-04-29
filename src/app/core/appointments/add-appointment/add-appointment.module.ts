import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAppointmentRoutingModule } from './add-appointment-routing.module';
import { AddAppointmentComponent } from './add-appointment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddAppointmentComponent
  ],
  imports: [
    CommonModule,
    AddAppointmentRoutingModule,
    SharedModule
  ]
})
export class AddAppointmentModule { }
