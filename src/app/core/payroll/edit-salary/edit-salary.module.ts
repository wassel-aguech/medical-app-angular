import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSalaryRoutingModule } from './edit-salary-routing.module';
import { EditSalaryComponent } from './edit-salary.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditSalaryComponent
  ],
  imports: [
    CommonModule,
    EditSalaryRoutingModule,
    SharedModule
  ]
})
export class EditSalaryModule { }
