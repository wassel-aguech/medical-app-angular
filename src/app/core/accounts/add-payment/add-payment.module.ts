import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPaymentRoutingModule } from './add-payment-routing.module';
import { AddPaymentComponent } from './add-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPaymentComponent
  ],
  imports: [
    CommonModule,
    AddPaymentRoutingModule,
    SharedModule
  ]
})
export class AddPaymentModule { }
