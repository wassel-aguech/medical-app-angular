import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./invoices-list/invoices-list.module').then(
          (m) => m.InvoicesListModule
        ),
    },
    {
      path: 'invoices-grid',
      loadChildren: () =>
        import('./invoices-grid/invoices-grid.module').then(
          (m) => m.InvoicesGridModule
        ),
    },
    {
      path: 'add-invoice',
      loadChildren: () =>
        import('./add-invoice/add-invoice.module').then(
          (m) => m.AddInvoiceModule
        ),
    },
    {
      path: 'edit-invoices',
      loadChildren: () =>
        import('./edit-invoices/edit-invoices.module').then(
          (m) => m.EditInvoicesModule
        ),
    },
    {
      path: 'view-invoice',
      loadChildren: () =>
        import('./view-invoice/view-invoice.module').then(
          (m) => m.ViewInvoiceModule
        ),
    },
    {
      path: 'invoices-settings',
      loadChildren: () =>
        import('./invoices-settings/invoices-settings.module').then(
          (m) => m.InvoicesSettingsModule
        ),
    },
    {
      path: 'create-invoice',
      loadChildren: () =>
        import('./create-invoice/create-invoice.module').then(
          (m) => m.CreateInvoiceModule
        ),
    },
    {
      path: 'edit-invoice',
      loadChildren: () =>
        import('./edit-invoice/edit-invoice.module').then(
          (m) => m.EditInvoiceModule
        ),
    },
    {
      path: 'tax-settings',
      loadChildren: () =>
        import('./tax-settings/tax-settings.module').then(
          (m) => m.TaxSettingsModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
