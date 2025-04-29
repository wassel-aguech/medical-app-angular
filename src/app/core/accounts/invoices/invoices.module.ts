import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule
  ]
})
export class InvoicesModule { }
