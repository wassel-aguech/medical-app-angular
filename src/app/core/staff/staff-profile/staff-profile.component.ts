import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-staff-profile',
    templateUrl: './staff-profile.component.html',
    styleUrls: ['./staff-profile.component.scss'],
    standalone: false
})
export class StaffProfileComponent {
  public routes = routes;
}
