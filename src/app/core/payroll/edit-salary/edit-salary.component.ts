import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-salary',
    templateUrl: './edit-salary.component.html',
    styleUrls: ['./edit-salary.component.scss'],
    standalone: false
})
export class EditSalaryComponent {
  public routes = routes;
  public selectedValue !: string  ;

  selectedList: data[] = [
    {value: 'Select Staff'},
    {value: 'Williams Bruk'},
    {value: 'Galaviz Lalema'},
  ];

}
