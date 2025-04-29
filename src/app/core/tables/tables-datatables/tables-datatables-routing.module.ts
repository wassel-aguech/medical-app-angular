import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesDatatablesComponent } from './tables-datatables.component';

const routes: Routes = [{ path: '', component: TablesDatatablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesDatatablesRoutingModule { }
