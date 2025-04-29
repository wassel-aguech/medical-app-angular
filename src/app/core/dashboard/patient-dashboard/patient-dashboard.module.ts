import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    PatientDashboardRoutingModule,
    SharedModule,
  ]
})
export class PatientDashboardModule { }
