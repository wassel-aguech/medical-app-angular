import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Disponibilite } from 'src/app/shared/models/disponibilite';
import { Medecin } from 'src/app/shared/models/medecin';
import { RendezVous } from 'src/app/shared/models/rendezVous';
import { routes } from 'src/app/shared/routes/routes';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { RendezvousService } from 'src/app/shared/services/rendezvous.service';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.scss'],
    standalone: false
})
export class DoctorProfileComponent implements OnInit {
  listdisponibilites: Disponibilite[] = [];
  public routes    = routes;
  medecinservice   = inject(MedecinService)
  toastr           = inject(ToastrService)
  route            = inject(ActivatedRoute)
  rendezvousService = inject(RendezvousService)
  router            = inject(Router)
  redezvousservice = inject(RendezvousService)
  disponibiliteService = inject(DisponibiliteService)

  medecin          : Medecin= new Medecin();
  userId           : any;
  medecinId        : any
  renderVousForm   : FormGroup;
  renderVous       : RendezVous = new RendezVous
  role             :any
  listrendezVous   : RendezVous[] = []






  @ViewChild('closemodal') closeModalButton: any;




  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');
    console.log(" patient id est" , this.userId)

     this.medecinId =  this.route.snapshot.params['id']
     console.log(" medecin id est" , this.medecinId)

     this.role = localStorage.getItem('role');
     console.log("Role from localStorage:", this.role);






     this.getMedecin();
     this.loadDisponibilites()

  }




  constructor(

  ) {
    this.renderVousForm = new FormGroup({
      motif      : new FormControl('', Validators.required),
      dateDemande      : new FormControl('', Validators.required),
      dateRendezVous      : new FormControl('', Validators.required),
      statut      : new FormControl('', Validators.required),

    })
   }


  getMedecin() {

    this.role = localStorage.getItem('role');
    if(this.role == 'medecin'){
      this.userId = localStorage.getItem('userId');
    }else{
      this.userId = this.medecinId
    }

    this.medecinservice.getMedecinByid(this.userId).subscribe((data: Medecin) => {
      this.medecin = data;
      console.log(" medecin  data est ", this.medecin);
    });
  }




  demandeRendezVous(){

    this.renderVous.dateDemande = this.renderVousForm.value.dateDemande
    this.renderVous.dateRendezVous = this.renderVousForm.value.dateRendezVous
    this.renderVous.motif = this.renderVousForm.value.motif


    this.renderVous.patiendid = this.userId
    this.renderVous.medecinid = this.medecinId


    console.log(" info renderVous " , this.renderVous)

    this.redezvousservice.addRendezVous(this.renderVous).subscribe(
      (data : any)=>{
        console.log("data renderVous" , data)
        this.closeModalButton.nativeElement.click();
        this.toastr.success('RendezVous Envoyee avec succès', 'Succès')
      },(error)=>{
        console.log("error insertion renderVous")
        this.toastr.error(" render vous non envoyer resseyer plus tad")
      }
    )
   }






   loadDisponibilites(): void {
    this.role = localStorage.getItem('role');
    if(this.role == 'medecin'){
      this.userId = localStorage.getItem('userId');
    }else{
      this.userId = this.medecinId
    }

    this.disponibiliteService.getDisponibilitesByMedecinId(this.userId).subscribe(
      (data) => {this.listdisponibilites = data,
        console.log("list des disponibilites est ", this.listdisponibilites)
      },
      (error) => console.error('Erreur lors du chargement des disponibilités', error)
    );
  }


  goToSettings() {
    this.router.navigate(['/doctor/doctor-setting', this.userId]);
  }




  getrendezvoustoday(){
    this.rendezvousService.getRendezVousToday(this.medecinId).subscribe(
      (data) => {
        this.listrendezVous = data;  // Stocke les rendez-vous dans la variable
      },
      (error) => {
        console.error('Erreur lors de la récupération des rendez-vous', error);
      }
    );
  }


  goToChat(id:any) {
    this.router.navigate(['/chat/patient/', this.userId]);

  }




  }


