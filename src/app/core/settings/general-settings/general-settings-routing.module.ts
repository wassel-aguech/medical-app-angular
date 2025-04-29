import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings.component';

const routes: Routes = [{ path: '', component: GeneralSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralSettingsRoutingModule { }
