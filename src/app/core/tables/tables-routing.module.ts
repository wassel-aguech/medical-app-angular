import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  { path: '', component: TablesComponent,
  children: [
    {
      path: 'tables-basic',
      loadChildren: () =>
        import('./tables-basic/tables-basic.module').then(
          (m) => m.TablesBasicModule
        ),
    },
    {
      path: 'tables-datatables',
      loadChildren: () =>
        import('./tables-datatables/tables-datatables.module').then(
          (m) => m.TablesDatatablesModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
