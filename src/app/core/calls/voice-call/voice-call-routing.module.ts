import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoiceCallComponent } from './voice-call.component';

const routes: Routes = [{ path: '', component: VoiceCallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceCallRoutingModule { }
