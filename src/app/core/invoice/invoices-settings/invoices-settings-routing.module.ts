import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesSettingsComponent } from './invoices-settings.component';

const routes: Routes = [
  { path: '', component: InvoicesSettingsComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesSettingsRoutingModule {}
