import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxesComponent } from './taxes.component';

const routes: Routes = [
  { path: '', component: TaxesComponent,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxesRoutingModule {}
