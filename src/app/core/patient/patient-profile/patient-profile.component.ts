import { Component, inject } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { patientProfile } from 'src/app/shared/models/models';
import { Patient } from 'src/app/shared/models/patient';
import { routes } from 'src/app/shared/routes/routes';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
    selector: 'app-patient-profile',
    templateUrl: './patient-profile.component.html',
    styleUrls: ['./patient-profile.component.scss'],
    standalone: false
})
export class PatientProfileComponent {
public routes = routes;
public patientProfile: Array<patientProfile> = [];

patientservice = inject(PatientService)
patient : Patient = new Patient();
userId: string | null = null;



constructor(public data : DataService)
{
  this.patientProfile = this.data.patientProfile;
}


ngOnInit(): void {

  this.userId = localStorage.getItem('userId');
  this.getPatient()
}


getPatient() {
  this.patientservice.getPatientByid(this.userId).subscribe((data: Patient) => {
    this.patient = data;
    console.log(" patient  data est ", this.patient);
  });
}


































































public sortData(sort: Sort) {
  const data = this.patientProfile.slice();

  if (!sort.active || sort.direction === '') {
    this.patientProfile = data;
  } else {
    this.patientProfile = data.sort((a, b) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const aValue = (a as any)[sort.active];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bValue = (b as any)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    });
  }
}
}
