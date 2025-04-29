import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './add-payment.component';

const routes: Routes = [{ path: '', component: AddPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPaymentRoutingModule { }
