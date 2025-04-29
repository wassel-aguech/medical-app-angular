import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewInvoiceRoutingModule } from './view-invoice-routing.module';
import { ViewInvoiceComponent } from './view-invoice.component';


@NgModule({
  declarations: [
    ViewInvoiceComponent
  ],
  imports: [
    CommonModule,
    ViewInvoiceRoutingModule
  ]
})
export class ViewInvoiceModule { }
