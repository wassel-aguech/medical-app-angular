import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientSettingComponent } from './patient-setting.component';

const routes: Routes = [{ path: '', component: PatientSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientSettingRoutingModule { }
