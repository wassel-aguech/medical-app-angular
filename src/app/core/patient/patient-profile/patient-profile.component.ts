import { Component, inject } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { patientProfile } from 'src/app/shared/models/models';
import { Patient } from 'src/app/shared/models/patient';
import { RendezVous } from 'src/app/shared/models/rendezVous';
import { routes } from 'src/app/shared/routes/routes';
import { PatientService } from 'src/app/shared/services/patient.service';
import { RendezvousService } from 'src/app/shared/services/rendezvous.service';

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
userId: any;
patientId: any
role: any;

rendezVousList: RendezVous[] = [];

constructor(public data : DataService ,
   private rendezVousService : RendezvousService ,
   private route : ActivatedRoute,
  private router : Router)
{
  this.patientProfile = this.data.patientProfile;
}


ngOnInit(): void {

  this.userId = localStorage.getItem('userId');

  this.patientId =  this.route.snapshot.params['id']




  this.rendezVousService.getRendezVousValidesByPatientId(this.userId)
  .subscribe(data => {
    this.rendezVousList = data;
  });




  this.getPatient()

}





getPatient() {


  this.role = localStorage.getItem('role');
  if(this.role == 'patient'){
    this.userId = localStorage.getItem('userId');
  }else{
    this.userId = this.patientId
  }


  this.patientservice.getPatientByid(this.userId).subscribe((data: Patient) => {
    this.patient = data;
    console.log(" patient  data est ", this.patient);
  });
}


openChatWithPatient() {
  this.router.navigate(['/chat/doctor', this.patientId]);
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
