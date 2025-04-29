import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditExpenseRoutingModule } from './edit-expense-routing.module';
import { EditExpenseComponent } from './edit-expense.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditExpenseComponent
  ],
  imports: [
    CommonModule,
    EditExpenseRoutingModule,
    SharedModule
  ]
})
export class EditExpenseModule { }
