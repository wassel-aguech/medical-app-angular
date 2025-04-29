import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';

const routes: Routes = [
  { path: '', component: AppointmentsComponent,
  children: [
    {
      path: 'appointment-list',
      loadChildren: () =>
        import('./appointment-list/appointment-list.module').then(
          (m) => m.AppointmentListModule
        ),
    },
    {
      path: 'add-appointment',
      loadChildren: () =>
        import('./add-appointment/add-appointment.module').then(
          (m) => m.AddAppointmentModule
        ),
    },
    {
      path: 'edit-appointment',
      loadChildren: () =>
        import('./edit-appointment/edit-appointment.module').then(
          (m) => m.EditAppointmentModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
