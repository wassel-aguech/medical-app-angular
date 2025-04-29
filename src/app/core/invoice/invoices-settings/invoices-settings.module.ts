import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesSettingsRoutingModule } from './invoices-settings-routing.module';
import { InvoicesSettingsComponent } from './invoices-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoicesSettingsComponent
  ],
  imports: [
    CommonModule,
    InvoicesSettingsRoutingModule,
    SharedModule
  ]
})
export class InvoicesSettingsModule { }
