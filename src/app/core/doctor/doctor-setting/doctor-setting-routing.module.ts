import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSettingComponent } from './doctor-setting.component';

const routes: Routes = [{ path: '', component: DoctorSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorSettingRoutingModule { }
