import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAppointmentRoutingModule } from './edit-appointment-routing.module';
import { EditAppointmentComponent } from './edit-appointment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    EditAppointmentRoutingModule,
    SharedModule
  ]
})
export class EditAppointmentModule { }
