import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesPaidComponent } from './invoices-paid.component';

const routes: Routes = [{ path: '', component: InvoicesPaidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesPaidRoutingModule { }
