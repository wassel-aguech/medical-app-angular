import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAssetComponent } from './edit-asset.component';

const routes: Routes = [{ path: '', component: EditAssetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAssetRoutingModule { }
