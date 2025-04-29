import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-leave',
    templateUrl: './edit-leave.component.html',
    styleUrls: ['./edit-leave.component.scss'],
    standalone: false
})
export class EditLeaveComponent {
  public routes = routes;
  public selectedValue !: string ;
  date = new FormControl(new Date());
  
  selectedList: data[] = [
    {value: 'Select Leave Type'},
    {value: 'Medical Leave'},
    {value: 'Casual Leave'},
    {value: 'Loss of Pay'},
  ];
}
