import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDepartmentComponent } from './edit-department.component';

const routes: Routes = [{ path: '', component: EditDepartmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDepartmentRoutingModule { }
