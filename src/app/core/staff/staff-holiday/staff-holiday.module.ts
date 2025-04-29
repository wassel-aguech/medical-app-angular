import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffHolidayRoutingModule } from './staff-holiday-routing.module';
import { StaffHolidayComponent } from './staff-holiday.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StaffHolidayComponent
  ],
  imports: [
    CommonModule,
    StaffHolidayRoutingModule,
    SharedModule
  ]
})
export class StaffHolidayModule { }
