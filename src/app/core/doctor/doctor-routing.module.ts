import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  { path: '', component: DoctorComponent,
  children: [
    {
      path: 'doctors-list',
      loadChildren: () =>
        import('./doctors-list/doctors-list.module').then(
          (m) => m.DoctorsListModule
        ),
    },
    {
      path: 'add-doctor',
      loadChildren: () =>
        import('./add-doctor/add-doctor.module').then((m) => m.AddDoctorModule),
    },
    {
      path: 'edit-doctor',
      loadChildren: () =>
        import('./edit-doctor/edit-doctor.module').then(
          (m) => m.EditDoctorModule
        ),
    },
    {
      path: 'doctor-profile',
      loadChildren: () =>
        import('./doctor-profile/doctor-profile.module').then(
          (m) => m.DoctorProfileModule
        ),
    },
    {
      path: 'doctor-setting',
      loadChildren: () =>
        import('./doctor-setting/doctor-setting.module').then(
          (m) => m.DoctorSettingModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
