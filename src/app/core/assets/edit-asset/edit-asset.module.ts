import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAssetRoutingModule } from './edit-asset-routing.module';
import { EditAssetComponent } from './edit-asset.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditAssetComponent
  ],
  imports: [
    CommonModule,
    EditAssetRoutingModule,
    SharedModule
  ]
})
export class EditAssetModule { }
