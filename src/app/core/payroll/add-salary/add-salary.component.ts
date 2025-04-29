import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-salary',
    templateUrl: './add-salary.component.html',
    styleUrls: ['./add-salary.component.scss'],
    standalone: false
})
export class AddSalaryComponent {
  public routes = routes;
  public selectedValue ! : string ;

  selectedList: data[] = [
    {value: 'Select Staff'},
    {value: 'Williams Bruk'},
    {value: 'Galaviz Lalema'},
  ];
}
