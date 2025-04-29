import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-seo-settings',
    templateUrl: './seo-settings.component.html',
    styleUrls: ['./seo-settings.component.scss'],
    standalone: false
})
export class SeoSettingsComponent {
  public routes = routes;
}
