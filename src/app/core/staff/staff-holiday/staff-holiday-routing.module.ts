import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffHolidayComponent } from './staff-holiday.component';

const routes: Routes = [{ path: '', component: StaffHolidayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffHolidayRoutingModule { }
