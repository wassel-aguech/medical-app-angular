import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogRoutingModule } from './add-blog-routing.module';
import { AddBlogComponent } from './add-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    AddBlogRoutingModule,
    SharedModule
  ]
})
export class AddBlogModule { }
