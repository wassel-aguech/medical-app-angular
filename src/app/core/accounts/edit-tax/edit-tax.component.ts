import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-tax',
    templateUrl: './edit-tax.component.html',
    styleUrls: ['./edit-tax.component.scss'],
    standalone: false
})
export class EditTaxComponent {
  public routes = routes;
  public selectedValue ! : string ;
  selectedList: data[] = [
    {value: 'Select Tax Method'},
    {value: 'Active'},
    {value: '2020'},
    {value: 'In Active'},
  ];
}
