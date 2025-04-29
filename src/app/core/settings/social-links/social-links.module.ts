import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLinksRoutingModule } from './social-links-routing.module';
import { SocialLinksComponent } from './social-links.component';


@NgModule({
  declarations: [
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    SocialLinksRoutingModule
  ]
})
export class SocialLinksModule { }
