import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-incoming-call',
    templateUrl: './incoming-call.component.html',
    styleUrls: ['./incoming-call.component.scss'],
    standalone: false
})
export class IncomingCallComponent {
  public routes = routes;
  public closeModal = false;

  

  public closeModalFunc() {
    this.closeModal = !this.closeModal;
  }
}
