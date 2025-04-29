import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailViewComponent } from './mail-view.component';

const routes: Routes = [{ path: '', component: MailViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailViewRoutingModule { }
