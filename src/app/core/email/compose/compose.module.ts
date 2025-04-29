import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposeComponent } from './compose.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComposeComponent
  ],
  imports: [
    CommonModule,
    ComposeRoutingModule,
    SharedModule
  ]
})
export class ComposeModule { }
