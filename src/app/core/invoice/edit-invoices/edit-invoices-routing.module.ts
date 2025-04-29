import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInvoicesComponent } from './edit-invoices.component';

const routes: Routes = [{ path: '', component: EditInvoicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditInvoicesRoutingModule { }
