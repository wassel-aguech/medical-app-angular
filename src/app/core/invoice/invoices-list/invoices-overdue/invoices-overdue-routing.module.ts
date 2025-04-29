import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesOverdueComponent } from './invoices-overdue.component';

const routes: Routes = [{ path: '', component: InvoicesOverdueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesOverdueRoutingModule { }
