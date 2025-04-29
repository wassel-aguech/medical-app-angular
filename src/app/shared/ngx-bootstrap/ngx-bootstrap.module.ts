import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
// import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { LightboxModule } from 'ngx-lightbox';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    NgScrollbarModule,
    // ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    // LightboxModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    NgScrollbarModule,
    // ToastrModule,
    TooltipModule,
    PopoverModule,
    ModalModule,
    // LightboxModule,
    BsDatepickerModule,
  ],
  providers: [],
})
export class NgxBootstrapModule {}
