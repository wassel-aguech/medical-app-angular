import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesDraftRoutingModule } from './invoices-draft-routing.module';
import { InvoicesDraftComponent } from './invoices-draft.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InvoicesDraftComponent
  ],
  imports: [
    CommonModule,
    InvoicesDraftRoutingModule,
    SharedModule
  ]
})
export class InvoicesDraftModule { }
