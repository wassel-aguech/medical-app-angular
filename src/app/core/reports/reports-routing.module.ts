import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  { path: '', component: ReportsComponent,
  children: [
    {
      path: 'expense-reports',
      loadChildren: () =>
        import('./expense-reports/expense-reports.module').then(
          (m) => m.ExpenseReportsModule
        ),
    },
    {
      path: 'invoice-reports',
      loadChildren: () =>
        import('./invoice-reports/invoice-reports.module').then(
          (m) => m.InvoiceReportsModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
