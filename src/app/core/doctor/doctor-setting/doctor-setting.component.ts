import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-doctor-setting',
    templateUrl: './doctor-setting.component.html',
    styleUrls: ['./doctor-setting.component.scss'],
    standalone: false
})
export class DoctorSettingComponent {
  public routes = routes;
}
