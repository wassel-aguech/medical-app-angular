import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmMailComponent } from './confirm-mail.component';

const routes: Routes = [{ path: '', component: ConfirmMailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmMailRoutingModule { }
