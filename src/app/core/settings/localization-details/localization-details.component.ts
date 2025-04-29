import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

interface data {
  value: string ;
}
@Component({
    selector: 'app-localization-details',
    templateUrl: './localization-details.component.html',
    styleUrls: ['./localization-details.component.scss'],
    standalone: false
})
export class LocalizationDetailsComponent {
  public routes = routes;
  public selectedValue !: string ;

  selectedList1: data[] = [
    { value: '(UTC +5:30) Antarctica/Palmer' },
    { value: '(UTC+05:30) India' },
  ];
  selectedList2: data[] = [
    { value: '15 May 2016' },
    { value: '15/05/2016' },
    { value: '15.05.2016' },
    { value: '15/05/2016' },
    { value: '05/15/2016' },
    { value: '2016/05/15' },
    { value: '2016/05/15' },
  ];
  selectedList3: data[] = [
    { value: '12 Hours' },
    { value: '24 Hours' },
    { value: '36 Hours' },
    { value: '48 Hours' },
    { value: '60 Hours' },
  ];
  selectedList4: data[] = [
    { value: '$' },
    { value: '₹' },
    { value: '£' },
    { value: '€' },
  ];
}
