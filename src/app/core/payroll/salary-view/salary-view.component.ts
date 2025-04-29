import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-salary-view',
    templateUrl: './salary-view.component.html',
    styleUrls: ['./salary-view.component.scss'],
    standalone: false
})
export class SalaryViewComponent {
  public routes = routes;
}
