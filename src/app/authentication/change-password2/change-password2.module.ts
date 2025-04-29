import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePassword2RoutingModule } from './change-password2-routing.module';
import { ChangePassword2Component } from './change-password2.component';


@NgModule({
  declarations: [
    ChangePassword2Component
  ],
  imports: [
    CommonModule,
    ChangePassword2RoutingModule
  ]
})
export class ChangePassword2Module { }
