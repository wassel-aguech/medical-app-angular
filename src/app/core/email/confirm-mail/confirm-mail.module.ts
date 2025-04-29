import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmMailRoutingModule } from './confirm-mail-routing.module';
import { ConfirmMailComponent } from './confirm-mail.component';


@NgModule({
  declarations: [
    ConfirmMailComponent
  ],
  imports: [
    CommonModule,
    ConfirmMailRoutingModule
  ]
})
export class ConfirmMailModule { }
