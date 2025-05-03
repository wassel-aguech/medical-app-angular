import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Disponibilite } from 'src/app/shared/models/disponibilite';
import { routes } from 'src/app/shared/routes/routes';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-schedule',
    templateUrl: './add-schedule.component.html',
    styleUrls: ['./add-schedule.component.scss'],
    standalone: false
})
export class AddScheduleComponent implements OnInit {
 
  public routes = routes;
  public selectedValue !: string  ;
  medecinid : any

  formDisponibilite! : FormGroup
  disponibiliteModel : Disponibilite = new Disponibilite()

   ngOnInit(): void {
     this.medecinid = localStorage.getItem('userId');

  }

  constructor(private disponibiliteService: DisponibiliteService ,
    private toastr: ToastrService,
    private router: Router
  ) {

    this.formDisponibilite = new FormGroup({
      jour: new FormControl('', Validators.required),
      heureDebut: new FormControl('', Validators.required),
      heureFin: new FormControl('', Validators.required),
    });
  }




  ajouterDisponibilite() {

    this.disponibiliteModel.jour = this.formDisponibilite.value.jour;
    this.disponibiliteModel.heureDebut = this.formDisponibilite.value.heureDebut;
    this.disponibiliteModel.heureFin = this.formDisponibilite.value.heureFin;
    this.disponibiliteModel.medecinId = this.medecinid; 
    console.log(this.disponibiliteModel)
     this.disponibiliteService.addDisponibilite(this.disponibiliteModel).subscribe({
       next: (res) => {
         this.toastr.success('Disponibilité ajoutée avec succès');
         this.router.navigate(['/doctor-schedule/schedule']);
       },
       error: (err) => {
         this.toastr.error('Erreur lors de l\'ajout de la disponibilité');
       }
     });


    }


































}
