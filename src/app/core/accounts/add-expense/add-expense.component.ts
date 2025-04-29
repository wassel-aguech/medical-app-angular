import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.scss'],
    standalone: false
})
export class AddExpenseComponent {
  public routes = routes;
  public selectedValue !: string  ;

  selectedList1: data[] = [
    {value: 'Select Purchase by'},
    {value: 'Bernardo James'},
    {value: 'Galaviz Lalema'},
    {value: 'Tarah Williams'},
  ];
  selectedList2: data[] = [
    {value: 'Select Paid by'},
    {value: 'Paypal'},
    {value: 'Cheque'},
    {value: 'Debit Card'},
  ];
  selectedList3: data[] = [
    {value: 'Select Payment Status'},
    {value: 'Approved'},
    {value: 'Rejected'},
    {value: 'Pending'},
  ];

}
