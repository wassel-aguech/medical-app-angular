import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    SharedModule
  ]
})
export class EditProfileModule { }
