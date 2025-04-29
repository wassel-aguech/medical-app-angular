import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-theme-settings',
    templateUrl: './theme-settings.component.html',
    styleUrls: ['./theme-settings.component.scss'],
    standalone: false
})
export class ThemeSettingsComponent {
  public routes = routes;
}
