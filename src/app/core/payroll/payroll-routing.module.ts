import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollComponent } from './payroll.component';

const routes: Routes = [
  { path: '', component: PayrollComponent,
  children: [
    {
      path: 'salary',
      loadChildren: () =>
        import('./salary/salary.module').then((m) => m.SalaryModule),
    },
    {
      path: 'salary-view',
      loadChildren: () =>
        import('./salary-view/salary-view.module').then(
          (m) => m.SalaryViewModule
        ),
    },
    {
      path: 'add-salary',
      loadChildren: () =>
        import('./add-salary/add-salary.module').then((m) => m.AddSalaryModule),
    },
    {
      path: 'edit-salary',
      loadChildren: () =>
        import('./edit-salary/edit-salary.module').then(
          (m) => m.EditSalaryModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayrollRoutingModule {}
