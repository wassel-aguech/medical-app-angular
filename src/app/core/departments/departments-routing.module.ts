import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent,
  children: [
    {
      path: 'department-list',
      loadChildren: () =>
        import('./department-list/department-list.module').then(
          (m) => m.DepartmentListModule
        ),
    },
    {
      path: 'add-department',
      loadChildren: () =>
        import('./add-department/add-department.module').then(
          (m) => m.AddDepartmentModule
        ),
    },
    {
      path: 'edit-department',
      loadChildren: () =>
        import('./edit-department/edit-department.module').then(
          (m) => m.EditDepartmentModule
        ),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
