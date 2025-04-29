import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-schedule',
    templateUrl: './edit-schedule.component.html',
    styleUrls: ['./edit-schedule.component.scss'],
    standalone: false
})
export class EditScheduleComponent {
  public routes = routes;
  public selectedValue !: string  ;
  date = new FormControl(new Date());
  
  selectedList: data[] = [
    {value: 'Choose Department'},
    {value: 'Cardiology'},
    {value: 'Urology'},
    {value: 'Radiology'},
  ];
}
