import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidentFundRoutingModule } from './provident-fund-routing.module';
import { ProvidentFundComponent } from './provident-fund.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProvidentFundComponent
  ],
  imports: [
    CommonModule,
    ProvidentFundRoutingModule,
    SharedModule
  ]
})
export class ProvidentFundModule { }
