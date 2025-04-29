import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInvoiceComponent } from './all-invoice.component';

const routes: Routes = [{ path: '', component: AllInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllInvoiceRoutingModule { }
