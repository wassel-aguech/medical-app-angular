import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-invoice-view',
    templateUrl: './invoice-view.component.html',
    styleUrls: ['./invoice-view.component.scss'],
    standalone: false
})
export class InvoiceViewComponent {
  public routes = routes;

}
