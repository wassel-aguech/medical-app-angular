import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/shared/models/medecin';
import { Patient } from 'src/app/shared/models/patient';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
    selector: 'app-patient-dashboard',
    templateUrl: './patient-dashboard.component.html',
    styleUrls: ['./patient-dashboard.component.scss'],
    standalone: false
})
export class PatientDashboardComponent implements OnInit {

  patientservice = inject(PatientService)
  router = inject(Router)
  patient : Patient = new Patient();
  userId: string | null = null;

  medecins: Medecin[] = [];
  displayedColumns: string[] = ['nom', 'email', 'statut'];

  constructor(    private medecinservice: MedecinService  )
  {

  }


  ngOnInit(): void {
    this.medecinservice.getAllMedecins().subscribe(data => {
      this.medecins = data;
    });

    this.userId = localStorage.getItem('userId');
    this.getPatient()
  }


  getPatient() {
    this.patientservice.getPatientByid(this.userId).subscribe((data: Patient) => {
      this.patient = data;
      console.log(" patient  data est ", this.patient);
    });
  }


  gotoProfiledoctor(id : any) {
    this.router.navigate(['doctor/doctor-profile',id]);}

}
