import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
    standalone: false
})
export class TypographyComponent {
  public routes = routes;
}
