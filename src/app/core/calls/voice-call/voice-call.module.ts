import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoiceCallRoutingModule } from './voice-call-routing.module';
import { VoiceCallComponent } from './voice-call.component';


@NgModule({
  declarations: [
    VoiceCallComponent
  ],
  imports: [
    CommonModule,
    VoiceCallRoutingModule
  ]
})
export class VoiceCallModule { }
