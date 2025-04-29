import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidentFundComponent } from './provident-fund.component';

const routes: Routes = [
  { path: '', component: ProvidentFundComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidentFundRoutingModule {}
