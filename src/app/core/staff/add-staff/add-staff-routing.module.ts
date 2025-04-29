import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './add-staff.component';

const routes: Routes = [{ path: '', component: AddStaffComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStaffRoutingModule { }
