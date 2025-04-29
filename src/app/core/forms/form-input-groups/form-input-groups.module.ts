import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormInputGroupsRoutingModule } from './form-input-groups-routing.module';
import { FormInputGroupsComponent } from './form-input-groups.component';


@NgModule({
  declarations: [
    FormInputGroupsComponent
  ],
  imports: [
    CommonModule,
    FormInputGroupsRoutingModule
  ]
})
export class FormInputGroupsModule { }
