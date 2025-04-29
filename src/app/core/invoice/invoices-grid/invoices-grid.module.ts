import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesGridRoutingModule } from './invoices-grid-routing.module';
import { InvoicesGridComponent } from './invoices-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesGridComponent
  ],
  imports: [
    CommonModule,
    InvoicesGridRoutingModule,
    SharedModule
  ]
})
export class InvoicesGridModule { }
