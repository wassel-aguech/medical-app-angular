import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-payment',
    templateUrl: './edit-payment.component.html',
    styleUrls: ['./edit-payment.component.scss'],
    standalone: false
})
export class EditPaymentComponent {
  public routes = routes;
  public selectedValue !: string  ;
  date = new FormControl(new Date());
  
  selectedList1: data[] = [
    {value: 'Enter Doctor Name'},
    {value: 'Dr.Galaviz Lalema'},
    {value: 'Dr.Bernardo James'},
    {value: 'Dr.Mark Hay Smith'},
  ];
  selectedList2: data[] = [
    {value: 'Select Payment Method'},
    {value: 'Credit Card'},
    {value: 'Debit Card'},
    {value: 'Pay Pal'},
  ];
  selectedList3: data[] = [
    {value: 'Select Payment Status'},
    {value: 'Paid'},
    {value: 'Partially Paid'},
    {value: 'Un Paid'},
  ];
}
