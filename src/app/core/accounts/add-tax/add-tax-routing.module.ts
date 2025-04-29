import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaxComponent } from './add-tax.component';

const routes: Routes = [{ path: '', component: AddTaxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTaxRoutingModule { }
