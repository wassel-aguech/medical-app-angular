import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}

@Component({
    selector: 'app-edit-expense',
    templateUrl: './edit-expense.component.html',
    styleUrls: ['./edit-expense.component.scss'],
    standalone: false
})
export class EditExpenseComponent {
  public routes = routes;
  public deleteIcon  = true;
  public selectedValue ! : string  ;
  date = new FormControl(new Date());
  deleteIconFunc(){
    this.deleteIcon = !this.deleteIcon
  }

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
