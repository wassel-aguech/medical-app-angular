import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-invoice',
    templateUrl: './edit-invoice.component.html',
    styleUrls: ['./edit-invoice.component.scss'],
    standalone: false
})
export class EditInvoiceComponent {
  public routes = routes;
  public selectedValue !: string  ;
  date = new FormControl(new Date());
  
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
