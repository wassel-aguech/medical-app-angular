import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
