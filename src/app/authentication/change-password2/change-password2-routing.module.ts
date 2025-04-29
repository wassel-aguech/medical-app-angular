import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassword2Component } from './change-password2.component';

const routes: Routes = [{ path: '', component: ChangePassword2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePassword2RoutingModule { }
