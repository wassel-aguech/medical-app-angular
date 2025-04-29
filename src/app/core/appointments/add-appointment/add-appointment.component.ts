import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-appointment',
    templateUrl: './add-appointment.component.html',
    styleUrls: ['./add-appointment.component.scss'],
    standalone: false
})
export class AddAppointmentComponent {
  public routes = routes;
  public selectedValue! : string  ;
  selectedList: data[] = [
    {value: 'Select Doctor'},
    {value: 'Dr.Bernardo James'},
    {value: 'Dr.Andrea Lalema'},
    {value: 'Dr.William Stephin'},
  ];
}
