import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/shared/models/medecin';
import { routes } from 'src/app/shared/routes/routes';
import { MedecinService } from 'src/app/shared/services/medecin.service';

@Component({
    selector: 'app-doctor-setting',
    templateUrl: './doctor-setting.component.html',
    styleUrls: ['./doctor-setting.component.scss'],
    standalone: false
})
export class DoctorSettingComponent {
  public routes = routes;

    medecinservice   = inject(MedecinService)
    router          = inject(Router)
    toastr          = inject(ToastrService)




 medecin          : Medecin= new Medecin();
  userId          : any;
  id              :any
  medecinForm! : FormGroup



  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');
    console.log(" patient id est" , this.userId)



     this.getMedecin();
     this.loadMedecin(this.userId)

  }


  constructor() {

    this.medecinForm = new FormGroup({
      firstName       : new FormControl('', Validators.required),
      phone           : new FormControl('', Validators.required),
      email           : new FormControl('', Validators.required),
      adress          : new FormControl('', Validators.required),
      password        : new FormControl('', Validators.required),

    });
  }



   getMedecin() {
      this.medecinservice.getMedecinByid(this.userId).subscribe((data: Medecin) => {
        this.medecin = data;
        console.log(" medecin  data est ", this.medecin);
      });
    }



    loadMedecin(id: number): void {
      this.id = this.userId
      this.medecinservice.getMedecinByid(id).subscribe({
        next: (medecin) => {
          console.log('Medecin reçu:', medecin);
          this.medecinForm.patchValue(medecin);
        },
        error: (err) => {
          console.error('Erreur chargement medecin', err);
        }
      });
    }


    updateMedecin(): void {


      const updateMedecin = {
        ...this.medecinForm.value,
        id: this.id
      };
        console.log("info medecin to update " , updateMedecin)

        this.medecinservice.updateMedecin(updateMedecin).subscribe({
          next: (response) => {
            this.toastr.info('Medecin updated avec succès', 'Succès')
            this.router.navigate(['doctor/doctors-profile']);

        },
        error: (error) => {
          this.toastr.error('erreur lors de la mise à jour du medecin', 'Erreur')

        }
      });
      }
}
