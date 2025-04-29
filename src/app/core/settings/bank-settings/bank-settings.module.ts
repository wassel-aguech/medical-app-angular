import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankSettingsRoutingModule } from './bank-settings-routing.module';
import { BankSettingsComponent } from './bank-settings.component';


@NgModule({
  declarations: [
    BankSettingsComponent
  ],
  imports: [
    CommonModule,
    BankSettingsRoutingModule
  ]
})
export class BankSettingsModule { }
