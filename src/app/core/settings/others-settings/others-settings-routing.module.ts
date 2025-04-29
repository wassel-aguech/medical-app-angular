import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersSettingsComponent } from './others-settings.component';

const routes: Routes = [{ path: '', component: OthersSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersSettingsRoutingModule { }
