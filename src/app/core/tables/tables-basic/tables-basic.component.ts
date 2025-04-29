import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-tables-basic',
    templateUrl: './tables-basic.component.html',
    styleUrls: ['./tables-basic.component.scss'],
    standalone: false
})
export class TablesBasicComponent {
  public routes = routes;
}
