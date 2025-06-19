import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../shared/gaurd/auth.guard';
import { CoreComponent } from './core.component';
import { authGuard } from '../shared/guards/auth.guard';
import { adminGuard } from '../shared/guards/admin.guard';
import { medecinGuard } from '../shared/guards/medecin.guard';
import { patientGuard } from '../shared/guards/patient.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    //canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                   // canActivate: [authGuard],

      },
      {
        path: 'doctor',
        loadChildren: () =>
          import('./doctor/doctor.module').then((m) => m.DoctorModule),

      },
      {
        path: 'patient',
        loadChildren: () =>
          import('./patient/patient.module').then((m) => m.PatientModule),

      },

      {
        path: 'appointments',
        loadChildren: () =>
          import('./appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
                    //  canActivate: [ medecinGuard],

      },
      {
        path: 'doctor-schedule',
        loadChildren: () =>
          import('./doctor-schedule/doctor-schedule.module').then(
            (m) => m.DoctorScheduleModule
          ),
                  //    canActivate: [medecinGuard],

      },
      // {
      //   path: 'departments',
      //   loadChildren: () =>
      //     import('./departments/departments.module').then(
      //       (m) => m.DepartmentsModule
      //     ),
      // },
      // {
      //   path: 'accounts',
      //   loadChildren: () =>
      //     import('./accounts/accounts.module').then((m) => m.AccountsModule),
      // },


      // {
      //   path: 'chat',
      //   loadChildren: () =>
      //     import('./chat/chat.module').then((m) => m.ChatModule),
      // },

      {
        path: 'chat/patient/:doctorId',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'chat/doctor/:patientId',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatModule),
      },


      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.module').then((m) => m.EmailModule),
      },

      {
        path: 'assets',
        loadChildren: () =>
          import('./assets/assets.module').then((m) => m.AssetsModule),
      },
      // {
      //   path: 'activities',
      //   loadChildren: () =>
      //     import('./activities/activities.module').then(
      //       (m) => m.ActivitiesModule
      //     ),
      // },
      // {
      //   path: 'reports',
      //   loadChildren: () =>
      //     import('./reports/reports.module').then((m) => m.ReportsModule),
      // },

      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      // {
      //   path: 'components',
      //   loadChildren: () =>
      //     import('./components/components.module').then(
      //       (m) => m.ComponentsModule
      //     ),
      // },

      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },

      {
        path: 'edit-profile',
        loadChildren: () =>
          import('./edit-profile/edit-profile.module').then(
            (m) => m.EditProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
