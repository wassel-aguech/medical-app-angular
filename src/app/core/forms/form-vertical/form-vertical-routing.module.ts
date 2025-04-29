import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormVerticalComponent } from './form-vertical.component';

const routes: Routes = [{ path: '', component: FormVerticalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormVerticalRoutingModule { }
