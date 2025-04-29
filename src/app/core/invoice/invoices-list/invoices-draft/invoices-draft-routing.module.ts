import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesDraftComponent } from './invoices-draft.component';

const routes: Routes = [{ path: '', component: InvoicesDraftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesDraftRoutingModule { }
