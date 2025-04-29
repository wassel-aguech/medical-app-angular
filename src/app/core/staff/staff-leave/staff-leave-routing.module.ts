import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffLeaveComponent } from './staff-leave.component';

const routes: Routes = [{ path: '', component: StaffLeaveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffLeaveRoutingModule { }
