import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInputGroupsComponent } from './form-input-groups.component';

const routes: Routes = [{ path: '', component: FormInputGroupsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInputGroupsRoutingModule { }
