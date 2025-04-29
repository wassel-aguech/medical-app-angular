import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffSettingComponent } from './staff-setting.component';

const routes: Routes = [{ path: '', component: StaffSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffSettingRoutingModule { }
