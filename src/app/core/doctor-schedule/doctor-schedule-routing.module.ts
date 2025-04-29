import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorScheduleComponent } from './doctor-schedule.component';

const routes: Routes = [
  { path: '', component: DoctorScheduleComponent,
  children: [
    {
      path: 'schedule',
      loadChildren: () =>
        import('./schedule/schedule.module').then((m) => m.ScheduleModule),
    },
    {
      path: 'add-schedule',
      loadChildren: () =>
        import('./add-schedule/add-schedule.module').then(
          (m) => m.AddScheduleModule
        ),
    },
    {
      path: 'edit-schedule',
      loadChildren: () =>
        import('./edit-schedule/edit-schedule.module').then(
          (m) => m.EditScheduleModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorScheduleRoutingModule {}
