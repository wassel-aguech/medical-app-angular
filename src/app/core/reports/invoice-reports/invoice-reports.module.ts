import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceReportsRoutingModule } from './invoice-reports-routing.module';
import { InvoiceReportsComponent } from './invoice-reports.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoiceReportsComponent
  ],
  imports: [
    CommonModule,
    InvoiceReportsRoutingModule,
    SharedModule
  ]
})
export class InvoiceReportsModule { }
