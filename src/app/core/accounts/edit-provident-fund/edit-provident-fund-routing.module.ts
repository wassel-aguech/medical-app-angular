import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProvidentFundComponent } from './edit-provident-fund.component';

const routes: Routes = [{ path: '', component: EditProvidentFundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProvidentFundRoutingModule { }
