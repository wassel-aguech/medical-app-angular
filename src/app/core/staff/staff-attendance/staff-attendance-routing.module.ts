import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffAttendanceComponent } from './staff-attendance.component';

const routes: Routes = [{ path: '', component: StaffAttendanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffAttendanceRoutingModule { }
