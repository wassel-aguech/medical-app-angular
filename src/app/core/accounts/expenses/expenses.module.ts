import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    SharedModule
  ]
})
export class ExpensesModule { }
