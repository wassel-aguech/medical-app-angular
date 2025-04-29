import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-schedule',
    templateUrl: './add-schedule.component.html',
    styleUrls: ['./add-schedule.component.scss'],
    standalone: false
})
export class AddScheduleComponent {
  public routes = routes;
  public selectedValue !: string  ;

  selectedList: data[] = [
    {value: 'Choose Department'},
    {value: 'Cardiology'},
    {value: 'Urology'},
    {value: 'Radiology'},
  ];

}
