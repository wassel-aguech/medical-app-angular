import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Disponibilite } from 'src/app/shared/models/disponibilite';
import { routes } from 'src/app/shared/routes/routes';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-schedule',
    templateUrl: './edit-schedule.component.html',
    styleUrls: ['./edit-schedule.component.scss'],
    standalone: false
})
export class EditScheduleComponent {
  public routes = routes;
  public selectedValue !: string  ;
  date = new FormControl(new Date());



  disponibiliteForm!       : FormGroup
  listDisponiblilite      : Disponibilite[] = []
  disponibilite          : Disponibilite = new Disponibilite
  viewModelMedecin  : Disponibilite = new Disponibilite
  id:any


  constructor( private fb : FormBuilder , private disponibiliteservice : DisponibiliteService ,
               private toastr: ToastrService , private router: Router ,
               private route: ActivatedRoute,
              ) {

   this.disponibiliteForm = new FormGroup({
     jour       : new FormControl('', Validators.required),
     heureDebut        : new FormControl('', Validators.required),
     heureFin        : new FormControl('', Validators.required),


   });
 }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.loadDisponibilite(+this.id);
    }
  }


  loadDisponibilite(id: number): void {
    this.disponibiliteservice.getDisponibiliteByid(id).subscribe({
      next: (disponibilite) => {
        console.log('Medecin reçu:', disponibilite);
        this.disponibiliteForm.patchValue(disponibilite);
      },
      error: (err) => {
        console.error('Erreur chargement disponibilite', err);
      }
    });
  }




  updateDisponibilite(): void {


    const updateDisponibilite = {
      ...this.disponibiliteForm.value,
      id: this.id
    };
      console.log("info disponibilite to update " , updateDisponibilite)

      this.disponibiliteservice.updateDisponibilte(updateDisponibilite).subscribe({
        next: (response) => {
          this.toastr.info('disponibilite updated avec succès', 'Succès')
          this.router.navigate(['doctor-schedule/schedule']);

      },
      error: (error) => {
        this.toastr.error('erreur lors de la mise à jour du disponibilite', 'Erreur')

      }
    });

  }















































































































  selectedList: data[] = [
    {value: 'Choose Department'},
    {value: 'Cardiology'},
    {value: 'Urology'},
    {value: 'Radiology'},
  ];
}
