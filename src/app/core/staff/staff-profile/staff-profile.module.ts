import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffProfileRoutingModule } from './staff-profile-routing.module';
import { StaffProfileComponent } from './staff-profile.component';


@NgModule({
  declarations: [
    StaffProfileComponent
  ],
  imports: [
    CommonModule,
    StaffProfileRoutingModule
  ]
})
export class StaffProfileModule { }
