import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-bank-settings',
    templateUrl: './bank-settings.component.html',
    styleUrls: ['./bank-settings.component.scss'],
    standalone: false
})
export class BankSettingsComponent {
  public routes = routes;

}
