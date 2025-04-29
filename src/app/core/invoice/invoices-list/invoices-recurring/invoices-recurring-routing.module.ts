import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesRecurringComponent } from './invoices-recurring.component';

const routes: Routes = [{ path: '', component: InvoicesRecurringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRecurringRoutingModule { }
