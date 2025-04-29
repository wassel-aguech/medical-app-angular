import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaxRoutingModule } from './edit-tax-routing.module';
import { EditTaxComponent } from './edit-tax.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditTaxComponent
  ],
  imports: [
    CommonModule,
    EditTaxRoutingModule,
    SharedModule
  ]
})
export class EditTaxModule { }
