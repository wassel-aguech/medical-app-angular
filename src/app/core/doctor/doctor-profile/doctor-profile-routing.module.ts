import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile.component';

const routes: Routes = [{ path: '', component: DoctorProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorProfileRoutingModule { }
