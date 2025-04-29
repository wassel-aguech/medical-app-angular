import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from './staff-list.component';

const routes: Routes = [{ path: '', component: StaffListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffListRoutingModule { }
