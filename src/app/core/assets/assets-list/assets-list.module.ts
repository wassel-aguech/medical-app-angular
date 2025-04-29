import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsListRoutingModule } from './assets-list-routing.module';
import { AssetsListComponent } from './assets-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AssetsListComponent
  ],
  imports: [
    CommonModule,
    AssetsListRoutingModule,
    SharedModule
  ]
})
export class AssetsListModule { }
