import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditInvoicesRoutingModule } from './edit-invoices-routing.module';
import { EditInvoicesComponent } from './edit-invoices.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditInvoicesComponent
  ],
  imports: [
    CommonModule,
    EditInvoicesRoutingModule,
    SharedModule
  ]
})
export class EditInvoicesModule { }
