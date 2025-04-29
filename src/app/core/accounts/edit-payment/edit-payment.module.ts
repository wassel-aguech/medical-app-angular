import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPaymentRoutingModule } from './edit-payment-routing.module';
import { EditPaymentComponent } from './edit-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditPaymentComponent
  ],
  imports: [
    CommonModule,
    EditPaymentRoutingModule,
    SharedModule
  ]
})
export class EditPaymentModule { }
