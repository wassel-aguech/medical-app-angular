import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: '', component: PatientComponent,
  children: [
    {
      path: 'patients-list',
      loadChildren: () =>
        import('./patients-list/patients-list.module').then(
          (m) => m.PatientsListModule
        ),
    },
    {
      path: 'add-patient',
      loadChildren: () =>
        import('./add-patient/add-patient.module').then(
          (m) => m.AddPatientModule
        ),
    },
    {
      path: 'edit-patient',
      loadChildren: () =>
        import('./edit-patient/edit-patient.module').then(
          (m) => m.EditPatientModule
        ),
    },
    {
      path: 'patient-profile',
      loadChildren: () =>
        import('./patient-profile/patient-profile.module').then(
          (m) => m.PatientProfileModule
        ),
    },
    {
      path: 'patient-setting',
      loadChildren: () =>
        import('./patient-setting/patient-setting.module').then(
          (m) => m.PatientSettingModule
        ),
    },
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
