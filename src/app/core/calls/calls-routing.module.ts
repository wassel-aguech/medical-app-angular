import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsComponent } from './calls.component';

const routes: Routes = [
  { path: '', component: CallsComponent,
  children: [
    {
      path: 'voice-call',
      loadChildren: () =>
        import('./voice-call/voice-call.module').then((m) => m.VoiceCallModule),
    },
    {
      path: 'video-call',
      loadChildren: () =>
        import('./video-call/video-call.module').then((m) => m.VideoCallModule),
    },
    {
      path: 'incoming-call',
      loadChildren: () =>
        import('./incoming-call/incoming-call.module').then(
          (m) => m.IncomingCallModule
        ),
    },
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallsRoutingModule {}
