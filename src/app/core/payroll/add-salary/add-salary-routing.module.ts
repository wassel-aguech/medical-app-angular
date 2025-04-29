import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalaryComponent } from './add-salary.component';

const routes: Routes = [{ path: '', component: AddSalaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSalaryRoutingModule { }
