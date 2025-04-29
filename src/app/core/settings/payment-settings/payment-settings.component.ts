import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-payment-settings',
    templateUrl: './payment-settings.component.html',
    styleUrls: ['./payment-settings.component.scss'],
    standalone: false
})
export class PaymentSettingsComponent {
  public routes = routes;
}
