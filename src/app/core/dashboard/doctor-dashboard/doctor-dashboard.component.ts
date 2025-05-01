import { Component, OnInit, ViewChild } from '@angular/core';
import { Medecin } from 'src/app/shared/models/medecin';
import { routes } from 'src/app/shared/routes/routes';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { RendezvousService } from 'src/app/shared/services/rendezvous.service';


@Component({
    selector: 'app-doctor-dashboard',
    templateUrl: './doctor-dashboard.component.html',
    styleUrls: ['./doctor-dashboard.component.scss'],
    standalone: false
})
export class DoctorDashboardComponent implements OnInit {

  public routes = routes;
  userId: any;
  medecin :  Medecin = new Medecin();
  listrendezVousMedecin: any[] = [];


  constructor(private medecinservice : MedecinService , private rendezVousService : RendezvousService){}



  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');


    this.rendezVousService.getRendezVousByMedecinId(this.userId).subscribe({
      next: (data) => {
        this.listrendezVousMedecin = data;
      },
      error: (err) => {
        console.error('Erreur de récupération des rendez-vous :', err);
      }
    });

  }



    getMedecin() {
      this.medecinservice.getMedecinByid(this.userId).subscribe((data: Medecin) => {
        this.medecin = data;
        console.log(" patient  data est ", this.medecin);
      });
    }





    accepterDemande(demande: any): void {
      if (!demande.dateRendezVous) {
        alert('Date de rendez-vous obligatoire');
        return;
      }

      const reponse = {
        dateRendezVous: demande.dateRendezVous,
        motif: demande.motif
      };

      this.rendezVousService.repondreRendezVous(demande.id, reponse).subscribe({
        next: (res) => {
          alert("Rendez-vous confirmé !");
          demande.statut = 'ACCEPTE';
        },
        error: err => {
          console.error("Erreur lors de la réponse :", err);
        }
      });
    }




}
