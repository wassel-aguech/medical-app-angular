import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-tax',
    templateUrl: './add-tax.component.html',
    styleUrls: ['./add-tax.component.scss'],
    standalone: false
})
export class AddTaxComponent {
  public routes = routes;
  public selectedValue ! : string  ;

  selectedList: data[] = [
    {value: 'Select Tax Method'},
    {value: 'Active'},
    {value: 'In Active'},
    {value: '2019'},
  ];

}
