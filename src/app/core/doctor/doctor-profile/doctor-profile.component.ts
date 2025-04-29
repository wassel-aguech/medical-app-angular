import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.scss'],
    standalone: false
})
export class DoctorProfileComponent {
  public routes = routes;
}
