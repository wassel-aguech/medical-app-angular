import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryViewComponent } from './salary-view.component';

const routes: Routes = [{ path: '', component: SalaryViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryViewRoutingModule { }
