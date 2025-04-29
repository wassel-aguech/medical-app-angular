import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHorizontalComponent } from './form-horizontal.component';

const routes: Routes = [{ path: '', component: FormHorizontalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormHorizontalRoutingModule { }
