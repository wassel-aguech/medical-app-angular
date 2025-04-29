import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetComponent } from './add-asset.component';

const routes: Routes = [{ path: '', component: AddAssetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAssetRoutingModule { }
