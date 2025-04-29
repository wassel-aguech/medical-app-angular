import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesCancelledRoutingModule } from './invoices-cancelled-routing.module';
import { InvoicesCancelledComponent } from './invoices-cancelled.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesCancelledComponent
  ],
  imports: [
    CommonModule,
    InvoicesCancelledRoutingModule,
    SharedModule
  ]
})
export class InvoicesCancelledModule { }
