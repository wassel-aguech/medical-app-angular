import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersSettingsRoutingModule } from './others-settings-routing.module';
import { OthersSettingsComponent } from './others-settings.component';


@NgModule({
  declarations: [
    OthersSettingsComponent
  ],
  imports: [
    CommonModule,
    OthersSettingsRoutingModule
  ]
})
export class OthersSettingsModule { }
