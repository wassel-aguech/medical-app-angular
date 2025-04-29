import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddScheduleRoutingModule } from './add-schedule-routing.module';
import { AddScheduleComponent } from './add-schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddScheduleComponent,
  ],
  imports: [
    CommonModule,
    AddScheduleRoutingModule,
    SharedModule,
  ]
})
export class AddScheduleModule { }
