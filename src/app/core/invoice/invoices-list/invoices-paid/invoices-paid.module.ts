import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesPaidRoutingModule } from './invoices-paid-routing.module';
import { InvoicesPaidComponent } from './invoices-paid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesPaidComponent
  ],
  imports: [
    CommonModule,
    InvoicesPaidRoutingModule,
    SharedModule
  ]
})
export class InvoicesPaidModule { }
