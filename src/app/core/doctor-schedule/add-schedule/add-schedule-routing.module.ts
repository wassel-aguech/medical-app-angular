import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScheduleComponent } from './add-schedule.component';

const routes: Routes = [{ path: '', component: AddScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddScheduleRoutingModule { }
