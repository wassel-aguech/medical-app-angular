import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './invoices-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicesListComponent,
    children: [
      {
        path: 'invoices-cancelled',
        loadChildren: () =>
          import('./invoices-cancelled/invoices-cancelled.module').then(
            (m) => m.InvoicesCancelledModule
          ),
      },
      {
        path: 'invoices-draft',
        loadChildren: () =>
          import('./invoices-draft/invoices-draft.module').then(
            (m) => m.InvoicesDraftModule
          ),
      },
      {
        path: 'invoices-overdue',
        loadChildren: () =>
          import('./invoices-overdue/invoices-overdue.module').then(
            (m) => m.InvoicesOverdueModule
          ),
      },
      {
        path: 'invoices-paid',
        loadChildren: () =>
          import('./invoices-paid/invoices-paid.module').then(
            (m) => m.InvoicesPaidModule
          ),
      },
      {
        path: 'invoices-recurring',
        loadChildren: () =>
          import('./invoices-recurring/invoices-recurring.module').then(
            (m) => m.InvoicesRecurringModule
          ),
      },
      {
        path: 'all-invoice',
        loadChildren: () =>
          import('./all-invoice/all-invoice.module').then(
            (m) => m.AllInvoiceModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesListRoutingModule {}
