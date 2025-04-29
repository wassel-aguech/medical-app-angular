import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInvoiceRoutingModule } from './add-invoice-routing.module';
import { AddInvoiceComponent } from './add-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddInvoiceComponent
  ],
  imports: [
    CommonModule,
    AddInvoiceRoutingModule,
    SharedModule
  ]
})
export class AddInvoiceModule { }
