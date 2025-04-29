import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsListComponent } from './assets-list.component';

const routes: Routes = [{ path: '', component: AssetsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsListRoutingModule { }
