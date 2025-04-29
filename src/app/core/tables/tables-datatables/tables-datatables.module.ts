import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesDatatablesRoutingModule } from './tables-datatables-routing.module';
import { TablesDatatablesComponent } from './tables-datatables.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TablesDatatablesComponent
  ],
  imports: [
    CommonModule,
    TablesDatatablesRoutingModule,
    SharedModule
  ]
})
export class TablesDatatablesModule { }
