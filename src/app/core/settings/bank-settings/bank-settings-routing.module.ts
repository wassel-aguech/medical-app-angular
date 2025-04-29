import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankSettingsComponent } from './bank-settings.component';

const routes: Routes = [{ path: '', component: BankSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankSettingsRoutingModule { }
