import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditScheduleComponent } from './edit-schedule.component';

const routes: Routes = [{ path: '', component: EditScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditScheduleRoutingModule { }
