import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStaffRoutingModule } from './add-staff-routing.module';
import { AddStaffComponent } from './add-staff.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddStaffComponent
  ],
  imports: [
    CommonModule,
    AddStaffRoutingModule,
    SharedModule
  ]
})
export class AddStaffModule { }
