import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-form-basic-inputs',
    templateUrl: './form-basic-inputs.component.html',
    styleUrls: ['./form-basic-inputs.component.scss'],
    standalone: false
})
export class FormBasicInputsComponent {
  public routes = routes;
}
