import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

interface data {
  value: string ;
}
@Component({
    selector: 'app-add-payment',
    templateUrl: './add-payment.component.html',
    styleUrls: ['./add-payment.component.scss'],
    standalone: false
})
export class AddPaymentComponent {
  public routes = routes;
  public selectedValue !: string  ;
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
