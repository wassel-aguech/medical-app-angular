import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list.component';

const routes: Routes = [{ path: '', component: DoctorsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsListRoutingModule { }
