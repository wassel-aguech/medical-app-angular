import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDepartmentRoutingModule } from './add-department-routing.module';
import { AddDepartmentComponent } from './add-department.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    AddDepartmentRoutingModule,
    SharedModule
  ]
})
export class AddDepartmentModule { }
