import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-invoice',
    templateUrl: './add-invoice.component.html',
    styleUrls: ['./add-invoice.component.scss'],
    standalone: false
})
export class AddInvoiceComponent {
  public routes = routes;
  public checkboxes: string[] = [];
  public itemDetails:  number[] = [0];
  public chargesArray: number[]= [0];
  public recurringInvoice   = false;
  public selectedValue! : string  ;
  date = new FormControl(new Date());
  
  public openCheckBoxes(val: string) {
    if (this.checkboxes[0] != val) {
      this.checkboxes[0] = val;
    } else {
      this.checkboxes = [];
    }
  }
  addItem() {
    this.itemDetails.push(0);
  }
  deleteItem(index:number){
    this.itemDetails.splice(index,1)
  }
  addCharges(){
    this.chargesArray.push(1)
  }
  deleteCharges(index:number){
    this.chargesArray.splice(index, 1)
  }
  recurringInvoiceFunc(){
    this.recurringInvoice = !this.recurringInvoice
  }
  selecedList: data[] = [
    {value: 'By month'},
    {value: 'March'},
    {value: 'April'},
    {value: 'May'},
    {value: 'June'},
    {value: 'July'}
  ];
}
