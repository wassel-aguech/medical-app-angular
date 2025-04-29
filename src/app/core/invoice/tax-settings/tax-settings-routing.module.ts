import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSettingsComponent } from './tax-settings.component';

const routes: Routes = [{ path: '', component: TaxSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSettingsRoutingModule { }
