import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesCancelledComponent } from './invoices-cancelled.component';

const routes: Routes = [{ path: '', component: InvoicesCancelledComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesCancelledRoutingModule { }
