import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';

interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-provident-fund',
    templateUrl: './edit-provident-fund.component.html',
    styleUrls: ['./edit-provident-fund.component.scss'],
    standalone: false
})
export class EditProvidentFundComponent {
  public routes = routes;
  public selectedValue !: string  ;
  date = new FormControl(new Date());
  
  selectedList1: data[] = [
    {value: 'Select Employee Name'},
    {value: 'Bernardo James'},
    {value: 'Galaviz Lalema'},
    {value: 'Tarah Williams'},
  ];
  selectedList2: data[] = [
    {value: 'Select Provident Fund Type'},
    {value: 'Basic Salary'},
    {value: 'Month Salary'},
  ];
}
