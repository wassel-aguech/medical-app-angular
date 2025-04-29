import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-create-invoice',
    templateUrl: './create-invoice.component.html',
    styleUrls: ['./create-invoice.component.scss'],
    standalone: false
})
export class CreateInvoiceComponent {
  public routes = routes;
  public selectedValue !: string  ;

  selectedList1: data[] = [
    {value: 'Select  Department'},
    {value: 'Orthopedics'},
    {value: 'Radiology'},
    {value: 'Dentist'},
  ];
  selectedList2: data[] = [
    {value: 'Select  Tax'},
    {value: 'VAT'},
    {value: 'GST'},
    {value: 'No GST'},
  ];
  selectedList3: data[] = [
    {value: 'Select Payment Method'},
    {value: 'Debit Card'},
    {value: 'Gpay'},
  ];
  selectedList4: data[] = [
    {value: 'Select  Tax'},
    {value: 'Paid'},
    {value: 'Un Paid'},
    {value: 'Partially Paid'},
  ];
  
}
