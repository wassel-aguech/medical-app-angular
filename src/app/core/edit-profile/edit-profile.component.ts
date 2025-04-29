import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';

interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    standalone: false
})
export class EditProfileComponent {
  public routes = routes;
  public selectedValue! : string ;
  date = new FormControl(new Date());
  
  selectedList: data[] = [
    {value: 'Select  Gendar'},
    {value: 'Male'},
    {value: 'Female'},
  ];
}
