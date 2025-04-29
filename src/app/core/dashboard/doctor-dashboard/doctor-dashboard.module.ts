import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorDashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule,
    SharedModule
  ]
})
export class DoctorDashboardModule { }
