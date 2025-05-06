import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Medecin } from 'src/app/shared/models/medecin';
import { routes } from 'src/app/shared/routes/routes';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
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
  listdisponibilites: any[] = [];

  notificationsCount: number = 0;
  notifications: any[] = [];
  private subscription!: Subscription;


  constructor(private medecinservice : MedecinService , private rendezVousService : RendezvousService,
    private disponibiliteService: DisponibiliteService ,
    private toastr: ToastrService ,private notificationService: NotificationService
  ){}



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



    this.getMedecin();
    this.loadDisponibilites()



    this.notificationService.connect(this.userId).subscribe({
      next: (msg: string) => {
        this.notifications.push(msg);
        console.log('Notification reçue :', msg);
      },
      error: (err) => {
        console.error('Erreur SSE :', err);
      }
    });



  }





    getMedecin() {
      this.medecinservice.getMedecinByid(this.userId).subscribe((data: Medecin) => {
        this.medecin = data;
        console.log(" medecin  data est ", this.medecin);
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


    loadDisponibilites(): void {
      this.disponibiliteService.getDisponibilitesByMedecinId(this.userId).subscribe(
        (data) => {this.listdisponibilites = data,
          console.log("list des disponibilites est ", this.listdisponibilites)
        },
        (error) => console.error('Erreur lors du chargement des disponibilités', error)
      );
    }








}
