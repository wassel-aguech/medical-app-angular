import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProvidentFundComponent } from './add-provident-fund.component';

const routes: Routes = [{ path: '', component: AddProvidentFundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProvidentFundRoutingModule { }
