import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoSettingsComponent } from './seo-settings.component';

const routes: Routes = [{ path: '', component: SeoSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoSettingsRoutingModule { }
