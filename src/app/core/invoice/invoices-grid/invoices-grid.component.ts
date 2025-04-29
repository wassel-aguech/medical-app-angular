import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { invoicesGrid } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-invoices-grid',
    templateUrl: './invoices-grid.component.html',
    styleUrls: ['./invoices-grid.component.scss'],
    standalone: false
})
export class InvoicesGridComponent {
  public routes = routes;
  public checkboxes: string[] = [];
  public invoicesGrid : Array<invoicesGrid>;

  public openCheckBoxes(val: string){
    if (this.checkboxes[0] != val) {
      this.checkboxes[0] = val;
    } else {
      this.checkboxes = [];
    }
  }
  constructor(public data:DataService){
    this.invoicesGrid = this.data.invoicesGrid
  }
}
