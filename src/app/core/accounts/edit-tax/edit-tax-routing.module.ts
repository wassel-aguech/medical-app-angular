import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaxComponent } from './edit-tax.component';

const routes: Routes = [{ path: '', component: EditTaxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTaxRoutingModule { }
