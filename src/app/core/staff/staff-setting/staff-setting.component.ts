import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-staff-setting',
    templateUrl: './staff-setting.component.html',
    styleUrls: ['./staff-setting.component.scss'],
    standalone: false
})
export class StaffSettingComponent {
  public routes = routes;
}
