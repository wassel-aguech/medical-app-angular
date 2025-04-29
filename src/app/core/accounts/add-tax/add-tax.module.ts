import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaxRoutingModule } from './add-tax-routing.module';
import { AddTaxComponent } from './add-tax.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddTaxComponent
  ],
  imports: [
    CommonModule,
    AddTaxRoutingModule,
    SharedModule
  ]
})
export class AddTaxModule { }
