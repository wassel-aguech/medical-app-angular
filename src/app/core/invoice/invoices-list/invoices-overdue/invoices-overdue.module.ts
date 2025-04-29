import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesOverdueRoutingModule } from './invoices-overdue-routing.module';
import { InvoicesOverdueComponent } from './invoices-overdue.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesOverdueComponent
  ],
  imports: [
    CommonModule,
    InvoicesOverdueRoutingModule,
    SharedModule
  ]
})
export class InvoicesOverdueModule { }
