import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-invoices-settings',
    templateUrl: './invoices-settings.component.html',
    styleUrls: ['./invoices-settings.component.scss'],
    standalone: false
})
export class InvoicesSettingsComponent {
  public routes = routes;
  public checkboxes: string[] = [];

  public openCheckBoxes(val: string) {
    if (this.checkboxes[0] != val) {
      this.checkboxes[0] = val;
    } else {
      this.checkboxes = [];
    }
  }
}
