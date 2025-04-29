import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDepartmentRoutingModule } from './edit-department-routing.module';
import { EditDepartmentComponent } from './edit-department.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    EditDepartmentRoutingModule,
    SharedModule
  ]
})
export class EditDepartmentModule { }
