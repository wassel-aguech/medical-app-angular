import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-patient-setting',
    templateUrl: './patient-setting.component.html',
    styleUrls: ['./patient-setting.component.scss'],
    standalone: false
})
export class PatientSettingComponent {
  public routes = routes;
}
