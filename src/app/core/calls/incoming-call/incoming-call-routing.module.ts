import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomingCallComponent } from './incoming-call.component';

const routes: Routes = [{ path: '', component: IncomingCallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomingCallRoutingModule { }
