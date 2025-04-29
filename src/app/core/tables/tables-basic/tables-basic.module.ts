import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesBasicRoutingModule } from './tables-basic-routing.module';
import { TablesBasicComponent } from './tables-basic.component';


@NgModule({
  declarations: [
    TablesBasicComponent
  ],
  imports: [
    CommonModule,
    TablesBasicRoutingModule
  ]
})
export class TablesBasicModule { }
