import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { TaxesComponent } from './taxes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxesComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule,
    SharedModule
  ]
})
export class TaxesModule { }
