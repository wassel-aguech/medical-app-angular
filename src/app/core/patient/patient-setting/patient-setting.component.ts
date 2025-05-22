import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/models/patient';
import { routes } from 'src/app/shared/routes/routes';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
    selector: 'app-patient-setting',
    templateUrl: './patient-setting.component.html',
    styleUrls: ['./patient-setting.component.scss'],
    standalone: false
})
export class PatientSettingComponent {
  public routes = routes;



   patientservice   = inject(PatientService)
      router          = inject(Router)
      toastr          = inject(ToastrService)




   patient          : Patient= new Patient();
    userId          : any;
    id              :any
    patientForm! : FormGroup



    ngOnInit(): void {

      this.userId = localStorage.getItem('userId');
      console.log(" patient id est" , this.userId)



       this.getPatient();
       this.loadPatient(this.userId)

    }


    constructor() {

      this.patientForm = new FormGroup({
        firstName       : new FormControl('', Validators.required),
        phone           : new FormControl('', Validators.required),
        email           : new FormControl('', Validators.required),
        adress          : new FormControl('', Validators.required),
        password        : new FormControl('', Validators.required),

      });
    }



     getPatient() {
        this.patientservice.getPatientByid(this.userId).subscribe((data: Patient) => {
          this.patient = data;
          console.log(" Patient  data est ", this.patient);
        });
      }



      loadPatient(id: number): void {
        this.id = this.userId
        this.patientservice.getPatientByid(id).subscribe({
          next: (Patient) => {
            console.log('Patient reçu:', Patient);
            this.patientForm.patchValue(Patient);
          },
          error: (err) => {
            console.error('Erreur chargement Patient', err);
          }
        });
      }


      updatePatient(): void {


        const updatePatient = {
          ...this.patientForm.value,
          id: this.id
        };
          console.log("info Patient to update " , updatePatient)

          this.patientservice.updatePatient(updatePatient).subscribe({
            next: (response) => {
              this.toastr.info('Patient updated avec succès', 'Succès')
              this.router.navigate(['doctor/doctor-profile', this.userId]);

          },
          error: (error) => {
            this.toastr.error('erreur lors de la mise à jour du Patient', 'Erreur')

          }
        });
        }

        goprofile(){
          this.router.navigate(['doctor/doctor-profile']);
        }
}
