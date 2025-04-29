import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditStaffRoutingModule } from './edit-staff-routing.module';
import { EditStaffComponent } from './edit-staff.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditStaffComponent
  ],
  imports: [
    CommonModule,
    EditStaffRoutingModule,
    SharedModule
  ]
})
export class EditStaffModule { }
