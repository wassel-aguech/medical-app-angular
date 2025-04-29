import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

interface data {
  value: string ;
}
@Component({
    selector: 'app-add-asset',
    templateUrl: './add-asset.component.html',
    styleUrls: ['./add-asset.component.scss'],
    standalone: false
})
export class AddAssetComponent {
  public routes = routes;
  public selectedValue !: string  ;

  selectedList1: data[] = [
    {value: 'Select Status'},
    {value: 'Williams Bruk'},
    {value: 'Galaviz Lalema'},
  ];
  selectedList2: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Approved'},
    {value: 'Returned'},
  ];
}
