import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBlogComponent } from './edit-blog.component';

const routes: Routes = [{ path: '', component: EditBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBlogRoutingModule { }
