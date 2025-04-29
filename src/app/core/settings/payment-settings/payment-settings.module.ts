import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSettingsRoutingModule } from './payment-settings-routing.module';
import { PaymentSettingsComponent } from './payment-settings.component';


@NgModule({
  declarations: [
    PaymentSettingsComponent
  ],
  imports: [
    CommonModule,
    PaymentSettingsRoutingModule
  ]
})
export class PaymentSettingsModule { }
