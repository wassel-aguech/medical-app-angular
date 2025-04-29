import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-invoices-list',
    templateUrl: './invoices-list.component.html',
    styleUrls: ['./invoices-list.component.scss'],
    standalone: false
})
export class InvoicesListComponent {
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
