import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  { path: '', component: StaffComponent,
  children: [
    {
      path: 'staff-list',
      loadChildren: () =>
        import('./staff-list/staff-list.module').then((m) => m.StaffListModule),
    },
    {
      path: 'staff-profile',
      loadChildren: () =>
        import('./staff-profile/staff-profile.module').then(
          (m) => m.StaffProfileModule
        ),
    },
    {
      path: 'staff-leave',
      loadChildren: () =>
        import('./staff-leave/staff-leave.module').then(
          (m) => m.StaffLeaveModule
        ),
    },
    {
      path: 'staff-holiday',
      loadChildren: () =>
        import('./staff-holiday/staff-holiday.module').then(
          (m) => m.StaffHolidayModule
        ),
    },
    {
      path: 'staff-attendance',
      loadChildren: () =>
        import('./staff-attendance/staff-attendance.module').then(
          (m) => m.StaffAttendanceModule
        ),
    },
    {
      path: 'add-staff',
      loadChildren: () =>
        import('./add-staff/add-staff.module').then((m) => m.AddStaffModule),
    },
    {
      path: 'edit-leave',
      loadChildren: () =>
        import('./edit-leave/edit-leave.module').then((m) => m.EditLeaveModule),
    },
    {
      path: 'edit-staff',
      loadChildren: () =>
        import('./edit-staff/edit-staff.module').then((m) => m.EditStaffModule),
    },
    {
      path: 'add-leave',
      loadChildren: () =>
        import('./add-leave/add-leave.module').then((m) => m.AddLeaveModule),
    },
    {
      path: 'staff-setting',
      loadChildren: () =>
        import('./staff-setting/staff-setting.module').then(
          (m) => m.StaffSettingModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
