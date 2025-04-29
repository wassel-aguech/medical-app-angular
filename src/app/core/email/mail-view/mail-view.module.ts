import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailViewRoutingModule } from './mail-view-routing.module';
import { MailViewComponent } from './mail-view.component';


@NgModule({
  declarations: [
    MailViewComponent
  ],
  imports: [
    CommonModule,
    MailViewRoutingModule
  ]
})
export class MailViewModule { }
