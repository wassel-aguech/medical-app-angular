import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseReportsRoutingModule } from './expense-reports-routing.module';
import { ExpenseReportsComponent } from './expense-reports.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ExpenseReportsComponent
  ],
  imports: [
    CommonModule,
    ExpenseReportsRoutingModule,
    SharedModule
  ]
})
export class ExpenseReportsModule { }
