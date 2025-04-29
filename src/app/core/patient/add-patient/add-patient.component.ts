import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.scss'],
    standalone: false
})
export class AddPatientComponent {
  public routes = routes;
  public selectedValue! : string  ;
  selectedList1: data[] = [
    {value: 'Select  Department'},
    {value: 'Orthopedics'},
    {value: 'Radiology'},
    {value: 'Dentist'},
  ];
  selectedList2: data[] = [
    {value: 'Select City'},
    {value: 'Alaska'},
    {value: 'Los Angeles'},
  ];
  selectedList3: data[] = [
    {value: 'Select Country'},
    {value: 'Usa'},
    {value: 'Uk'},
    {value: 'Italy'},
  ];
  selectedList4: data[] = [
    {value: 'Select State'},
    {value: 'Alaska'},
    {value: 'California'},
  ];
}
