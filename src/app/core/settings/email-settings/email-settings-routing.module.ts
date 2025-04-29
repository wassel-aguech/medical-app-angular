import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSettingsComponent } from './email-settings.component';

const routes: Routes = [{ path: '', component: EmailSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailSettingsRoutingModule { }
