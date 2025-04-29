import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProvidentFundRoutingModule } from './edit-provident-fund-routing.module';
import { EditProvidentFundComponent } from './edit-provident-fund.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditProvidentFundComponent
  ],
  imports: [
    CommonModule,
    EditProvidentFundRoutingModule,
    SharedModule
  ]
})
export class EditProvidentFundModule { }
