import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSettingsRoutingModule } from './email-settings-routing.module';
import { EmailSettingsComponent } from './email-settings.component';


@NgModule({
  declarations: [
    EmailSettingsComponent
  ],
  imports: [
    CommonModule,
    EmailSettingsRoutingModule
  ]
})
export class EmailSettingsModule { }
