import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialLinksComponent } from './social-links.component';

const routes: Routes = [{ path: '', component: SocialLinksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialLinksRoutingModule { }
