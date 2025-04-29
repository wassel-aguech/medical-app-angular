import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-email-settings',
    templateUrl: './email-settings.component.html',
    styleUrls: ['./email-settings.component.scss'],
    standalone: false
})
export class EmailSettingsComponent {
  public routes = routes;
}
