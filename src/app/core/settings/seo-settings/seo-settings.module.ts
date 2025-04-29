import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoSettingsRoutingModule } from './seo-settings-routing.module';
import { SeoSettingsComponent } from './seo-settings.component';


@NgModule({
  declarations: [
    SeoSettingsComponent
  ],
  imports: [
    CommonModule,
    SeoSettingsRoutingModule
  ]
})
export class SeoSettingsModule { }
