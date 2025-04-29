import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentListRoutingModule } from './appointment-list-routing.module';
import { AppointmentListComponent } from './appointment-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    AppointmentListRoutingModule,
    SharedModule
  ]
})
export class AppointmentListModule { }
