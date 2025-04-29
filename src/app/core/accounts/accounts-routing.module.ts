import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      {
        path: 'invoices',
        loadChildren: () =>
          import('./invoices/invoices.module').then((m) => m.InvoicesModule),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'expenses',
        loadChildren: () =>
          import('./expenses/expenses.module').then((m) => m.ExpensesModule),
      },
      {
        path: 'taxes',
        loadChildren: () =>
          import('./taxes/taxes.module').then((m) => m.TaxesModule),
      },
      {
        path: 'provident-fund',
        loadChildren: () =>
          import('./provident-fund/provident-fund.module').then(
            (m) => m.ProvidentFundModule
          ),
      },
      {
        path: 'add-payment',
        loadChildren: () =>
          import('./add-payment/add-payment.module').then(
            (m) => m.AddPaymentModule
          ),
      },
      {
        path: 'add-expense',
        loadChildren: () =>
          import('./add-expense/add-expense.module').then(
            (m) => m.AddExpenseModule
          ),
      },
      {
        path: 'edit-expense',
        loadChildren: () =>
          import('./edit-expense/edit-expense.module').then(
            (m) => m.EditExpenseModule
          ),
      },
  { path: 'invoice-view', loadChildren: () => import('./invoice-view/invoice-view.module').then(m => m.InvoiceViewModule) },
  { path: 'edit-payment', loadChildren: () => import('./edit-payment/edit-payment.module').then(m => m.EditPaymentModule) },
  { path: 'add-provident-fund', loadChildren: () => import('./add-provident-fund/add-provident-fund.module').then(m => m.AddProvidentFundModule) },
  { path: 'edit-provident-fund', loadChildren: () => import('./edit-provident-fund/edit-provident-fund.module').then(m => m.EditProvidentFundModule) },
  { path: 'add-tax', loadChildren: () => import('./add-tax/add-tax.module').then(m => m.AddTaxModule) },
  { path: 'edit-tax', loadChildren: () => import('./edit-tax/edit-tax.module').then(m => m.EditTaxModule) },
    ],
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
