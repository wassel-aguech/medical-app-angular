import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDoctorComponent } from './edit-doctor.component';

const routes: Routes = [{ path: '', component: EditDoctorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDoctorRoutingModule { }
