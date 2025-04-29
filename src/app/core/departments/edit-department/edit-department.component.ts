import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-edit-department',
    templateUrl: './edit-department.component.html',
    styleUrls: ['./edit-department.component.scss'],
    standalone: false
})
export class EditDepartmentComponent {
  public routes = routes;
}
