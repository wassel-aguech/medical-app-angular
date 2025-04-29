import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesListRoutingModule } from './invoices-list-routing.module';
import { InvoicesListComponent } from './invoices-list.component';


@NgModule({
  declarations: [
    InvoicesListComponent
  ],
  imports: [
    CommonModule,
    InvoicesListRoutingModule,
  ]
})
export class InvoicesListModule { }
