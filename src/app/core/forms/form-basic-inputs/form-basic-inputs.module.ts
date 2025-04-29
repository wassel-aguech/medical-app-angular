import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBasicInputsRoutingModule } from './form-basic-inputs-routing.module';
import { FormBasicInputsComponent } from './form-basic-inputs.component';


@NgModule({
  declarations: [
    FormBasicInputsComponent
  ],
  imports: [
    CommonModule,
    FormBasicInputsRoutingModule
  ]
})
export class FormBasicInputsModule { }
