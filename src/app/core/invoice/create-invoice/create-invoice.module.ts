import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateInvoiceRoutingModule } from './create-invoice-routing.module';
import { CreateInvoiceComponent } from './create-invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateInvoiceComponent
  ],
  imports: [
    CommonModule,
    CreateInvoiceRoutingModule,
    SharedModule
  ]
})
export class CreateInvoiceModule { }
