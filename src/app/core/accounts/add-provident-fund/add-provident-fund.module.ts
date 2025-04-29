import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProvidentFundRoutingModule } from './add-provident-fund-routing.module';
import { AddProvidentFundComponent } from './add-provident-fund.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddProvidentFundComponent
  ],
  imports: [
    CommonModule,
    AddProvidentFundRoutingModule,
    SharedModule
  ]
})
export class AddProvidentFundModule { }
