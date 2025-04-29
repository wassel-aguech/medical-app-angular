import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStaffComponent } from './edit-staff.component';

const routes: Routes = [{ path: '', component: EditStaffComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditStaffRoutingModule { }
