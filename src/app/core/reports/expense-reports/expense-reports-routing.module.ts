import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseReportsComponent } from './expense-reports.component';

const routes: Routes = [{ path: '', component: ExpenseReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseReportsRoutingModule { }
