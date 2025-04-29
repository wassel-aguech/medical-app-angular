import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-tax-settings',
    templateUrl: './tax-settings.component.html',
    styleUrls: ['./tax-settings.component.scss'],
    standalone: false
})
export class TaxSettingsComponent {
  public routes = routes;
}
