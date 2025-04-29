import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPaymentComponent } from './edit-payment.component';

const routes: Routes = [{ path: '', component: EditPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPaymentRoutingModule { }
