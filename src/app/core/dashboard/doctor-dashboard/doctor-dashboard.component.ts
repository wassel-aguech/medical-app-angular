import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  allnotifications: any[] = [];

  notificationsCount: number = 0;
  notifications: any[] = [];
  private subscription!: Subscription;


  constructor(private medecinservice : MedecinService , private rendezVousService : RendezvousService,
    private disponibiliteService: DisponibiliteService ,
    private toastr: ToastrService ,private notificationService: NotificationService , private router: Router
  ){}



  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');


    this.rendezVousService.getRendezVousByMedecinId(this.userId).subscribe({
      next: (data) => {
        this.listrendezVousMedecin = data;
        console.log("list des rendez-vous est ", this.listrendezVousMedecin);
      },
      error: (err) => {
        console.error('Erreur de récupération des rendez-vous :', err);
      }
    });



    this.getMedecin();
    this.loadDisponibilites()


    this.notificationService.connect(this.userId).subscribe({
      next: (msg: string) => {
        const newNotif = {
          id: Date.now(), // ou un ID temporaire
          message: msg,
          lue: false,
          dateEnvoi: new Date()
        };
        this.allnotifications.unshift(newNotif);
        this.updateNotificationsCount();
      },
      error: (err) => console.error('Erreur SSE :', err)
    });


    this.notificationService.getAllNotificationsByMedecin(this.userId).subscribe(data => {
      this.allnotifications = data;
    });


  }


  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }



  markAsRead(notif: any) {
    this.notificationService.markAsRead(notif.id).subscribe(() => {
      notif.lue = true;
      this.updateNotificationsCount();
    });
  }

  updateNotificationsCount() {
    this.notificationsCount = this.allnotifications.filter(n => !n.lue).length;
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





  gotoProfilePatient(patientid : any) {
    this.router.navigate(['patient/patient-profile',2]);}





}
