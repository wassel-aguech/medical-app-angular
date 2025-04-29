import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceReportsComponent } from './invoice-reports.component';

const routes: Routes = [{ path: '', component: InvoiceReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceReportsRoutingModule { }
