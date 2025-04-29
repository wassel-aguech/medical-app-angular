import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBlogRoutingModule } from './edit-blog-routing.module';
import { EditBlogComponent } from './edit-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditBlogComponent
  ],
  imports: [
    CommonModule,
    EditBlogRoutingModule,
    SharedModule
  ]
})
export class EditBlogModule { }
