import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

interface data {
  value: string ;
}
@Component({
    selector: 'app-staff-attendance',
    templateUrl: './staff-attendance.component.html',
    styleUrls: ['./staff-attendance.component.scss'],
    standalone: false
})
export class StaffAttendanceComponent {
  public routes = routes;
  public selectedValue! : string  ;
  selectedList1: data[] = [
    {value: 'Select Year'},
    {value: '2022'},
    {value: '2021'},
    {value: '2020'},
    {value: '2019'},
    {value: '2018'},
    {value: '2017'},
  ];
  selectedList2: data[] = [
    {value: 'Select Month'},
    {value: 'December'},
    {value: 'November'},
    {value: 'October'},
    {value: 'September'},

  ];
}
