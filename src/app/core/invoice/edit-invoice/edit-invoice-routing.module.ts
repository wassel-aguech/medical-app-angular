import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInvoiceComponent } from './edit-invoice.component';

const routes: Routes = [{ path: '', component: EditInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditInvoiceRoutingModule { }
