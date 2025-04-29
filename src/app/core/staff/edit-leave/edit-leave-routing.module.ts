import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLeaveComponent } from './edit-leave.component';

const routes: Routes = [{ path: '', component: EditLeaveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditLeaveRoutingModule { }
