import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    LightgalleryModule,
    FormsModule
  ]
})
export class GalleryModule { }
