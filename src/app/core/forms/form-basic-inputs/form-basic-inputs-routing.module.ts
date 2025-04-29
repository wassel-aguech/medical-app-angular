import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBasicInputsComponent } from './form-basic-inputs.component';

const routes: Routes = [{ path: '', component: FormBasicInputsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBasicInputsRoutingModule { }
