import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSalaryComponent } from './edit-salary.component';

const routes: Routes = [{ path: '', component: EditSalaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSalaryRoutingModule { }
