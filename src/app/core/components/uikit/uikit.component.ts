import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-uikit',
    templateUrl: './uikit.component.html',
    styleUrls: ['./uikit.component.scss'],
    standalone: false
})
export class UikitComponent {
  public routes = routes;
}
