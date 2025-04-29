import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAssetRoutingModule } from './add-asset-routing.module';
import { AddAssetComponent } from './add-asset.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddAssetComponent
  ],
  imports: [
    CommonModule,
    AddAssetRoutingModule,
    SharedModule
  ]
})
export class AddAssetModule { }
