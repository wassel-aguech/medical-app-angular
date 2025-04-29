import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesBasicComponent } from './tables-basic.component';

const routes: Routes = [{ path: '', component: TablesBasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesBasicRoutingModule { }
