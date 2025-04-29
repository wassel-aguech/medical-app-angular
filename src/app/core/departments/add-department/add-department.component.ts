import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-add-department',
    templateUrl: './add-department.component.html',
    styleUrls: ['./add-department.component.scss'],
    standalone: false
})
export class AddDepartmentComponent {
  public routes = routes;
}
