import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-social-settings',
    templateUrl: './social-settings.component.html',
    styleUrls: ['./social-settings.component.scss'],
    standalone: false
})
export class SocialSettingsComponent {
  public routes = routes;
}
