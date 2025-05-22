import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { authGuard } from 'src/app/shared/guards/auth.guard';
import { adminGuard } from 'src/app/shared/guards/admin.guard';
import { medecinGuard } from 'src/app/shared/guards/medecin.guard';
import { patientGuard } from 'src/app/shared/guards/patient.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo:'admin-dashboard',
      pathMatch:'full'
    },
    {
      path: 'admin-dashboard',
      loadChildren: () =>
        import('./admin-dashboard/admin-dashboard.module').then(
          (m) => m.AdminDashboardModule
        ),
                    canActivate: [authGuard , adminGuard],

    },
    {
      path: 'doctor-dashboard',
      loadChildren: () =>
        import('./doctor-dashboard/doctor-dashboard.module').then(
          (m) => m.DoctorDashboardModule
        ),
                    canActivate: [authGuard , medecinGuard],

    },
    {
      path: 'patient-dashboard',
      loadChildren: () =>
        import('./patient-dashboard/patient-dashboard.module').then(
          (m) => m.PatientDashboardModule
        ),
                    canActivate: [authGuard , patientGuard],

    },




  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
