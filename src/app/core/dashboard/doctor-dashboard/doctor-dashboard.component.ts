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
import { Notification, NotificationType } from 'src/app/shared/models/notification';


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

    messageNotifications: Notification[] = [];
    rendezvousNotifications: Notification[] = [];


  constructor(private medecinservice : MedecinService , private rendezVousService : RendezvousService,
    private disponibiliteService: DisponibiliteService ,
    private toastr: ToastrService ,private notificationService: NotificationService , private router: Router
  ){}


  isDropdownOpen = false;

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}


  // ngOnInit(): void {
  //   this.userId = localStorage.getItem('userId');


  //   this.rendezVousService.getRendezVousByMedecinId(this.userId).subscribe({
  //     next: (data) => {
  //       this.listrendezVousMedecin = data;
  //       console.log("list des rendez-vous est ", this.listrendezVousMedecin);
  //     },
  //     error: (err) => {
  //       console.error('Erreur de récupération des rendez-vous :', err);
  //     }
  //   });



  //   this.getMedecin();
  //   this.loadDisponibilites()


  //   this.notificationService.connect(this.userId).subscribe({
  //     next: (msg: string) => {
  //       const newNotif = {
  //         id: Date.now(), // ou un ID temporaire
  //         message: msg,
  //         lue: false,
  //         dateEnvoi: new Date()
  //       };
  //       this.allnotifications.unshift(newNotif);
  //       this.updateNotificationsCount();
  //     },
  //     error: (err) => console.error('Erreur SSE :', err)
  //   });


  //   this.notificationService.getAllNotificationsByMedecin(this.userId).subscribe(data => {
  //     this.allnotifications = data;
  //   });


  // }

//   ngOnInit(): void {
//   // Récupérer userId (penser à convertir en nombre)
//   const storedUserId = localStorage.getItem('userId');
//   if (!storedUserId) {
//     console.error('User ID introuvable dans localStorage');
//     return;
//   }
//   this.userId = +storedUserId;

//   // Charger les rendez-vous du médecin
//   this.rendezVousService.getRendezVousByMedecinId(this.userId).subscribe({
//     next: (data) => {
//       this.listrendezVousMedecin = data;
//       console.log("Liste des rendez-vous : ", this.listrendezVousMedecin);
//     },
//     error: (err) => {
//       console.error('Erreur de récupération des rendez-vous :', err);
//     }
//   });

//   // Charger les infos du médecin (ta méthode existante)
//   this.getMedecin();

//   // Charger disponibilités (ta méthode existante)
//   this.loadDisponibilites();

//   // Initialiser les listes de notifications
//   this.messageNotifications = [];
//   this.rendezvousNotifications = [];

//   // Connexion SSE pour notifications en temps réel
//   this.notificationService.connect(this.userId).subscribe({
//     next: (notif: Notification) => {
//       if (notif.type === NotificationType.MESSAGE) {
//         this.messageNotifications.unshift(notif);
//         this.toastr.info(`Nouveau message : ${notif.message}`, 'Message');
//       } else if (notif.type === NotificationType.RENDEZVOUS) {
//         this.rendezvousNotifications.unshift(notif);
//         this.toastr.success(`Rendez-vous : ${notif.message}`, 'Rendez-vous');
//       }
//     },
//     error: (err) => {
//       console.error('Erreur SSE :', err);
//     }
//   });

//   // Charger toutes les notifications existantes au démarrage
//   this.notificationService.getAllNotificationsByMedecin(this.userId).subscribe({
//     next: (data: Notification[]) => {
//       this.messageNotifications = data.filter(n => n.type === NotificationType.MESSAGE);
//       this.rendezvousNotifications = data.filter(n => n.type === NotificationType.RENDEZVOUS);
//     },
//     error: (err) => {
//       console.error('Erreur récupération notifications :', err);
//     }
//   });
// }


// ngOnInit(): void {
//   const storedUserId = localStorage.getItem('userId');
//   if (!storedUserId) {
//     console.error('User ID introuvable dans localStorage');
//     return;
//   }
//   this.userId = +storedUserId;

//   // Init
//   this.messageNotifications = [];
//   this.rendezvousNotifications = [];

//   // 1. Charger les notifications existantes
//   this.notificationService.getAllNotificationsByMedecin(this.userId).subscribe({
//     next: (data: Notification[]) => {
//       this.messageNotifications = data.filter(n => n.type === NotificationType.MESSAGE);
//       this.rendezvousNotifications = data.filter(n => n.type === NotificationType.RENDEZVOUS);
//     },
//     error: (err) => {
//       console.error('Erreur récupération notifications :', err);
//     }
//   });

//   // 2. Connexion aux notifications SSE (après le chargement initial)
//   this.notificationService.connect(this.userId).subscribe({
//     next: (notif: Notification) => {
//       if (notif.type === NotificationType.MESSAGE) {
//         this.messageNotifications.unshift(notif);
//         this.toastr.info(`Nouveau message : ${notif.message}`, 'Message');
//       } else if (notif.type === NotificationType.RENDEZVOUS) {
//         this.rendezvousNotifications.unshift(notif);
//         this.toastr.success(`Rendez-vous : ${notif.message}`, 'Rendez-vous');
//       }
//     },
//     error: (err) => {
//       console.error('Erreur SSE :', err);
//     }
//   });

//   // Charger les autres données
//   this.getMedecin();
//   this.loadDisponibilites();

//   this.rendezVousService.getRendezVousByMedecinId(this.userId).subscribe({
//     next: (data) => {
//       this.listrendezVousMedecin = data;
//       console.log("Liste des rendez-vous : ", this.listrendezVousMedecin);
//     },
//     error: (err) => {
//       console.error('Erreur de récupération des rendez-vous :', err);
//     }
//   });
// }

ngOnInit(): void {
  const storedUserId = localStorage.getItem('userId');
  if (!storedUserId) {
    console.error('User ID introuvable dans localStorage');
    return;
  }

  this.userId = +storedUserId;

  // Initialisation des tableaux de notifications
  this.messageNotifications = [];
  this.rendezvousNotifications = [];

  // 1. Charger les notifications existantes depuis l'API
  this.notificationService.getAllNotificationsByMedecin(this.userId).subscribe({
    next: (notifications: Notification[]) => {
      this.messageNotifications = notifications.filter(n => n.type === NotificationType.MESSAGE);
      this.rendezvousNotifications = notifications.filter(n => n.type === NotificationType.RENDEZVOUS);
    },
    error: (err) => {
      console.error('Erreur lors du chargement des notifications :', err);
    }
  });

  // 2. Connexion aux notifications en temps réel via SSE
  this.notificationService.connect(this.userId).subscribe({
    next: (notif: Notification) => {
      console.log('Notification reçue en temps réel :', notif);
      if (notif.type === NotificationType.MESSAGE) {
        this.messageNotifications.unshift(notif);
        this.toastr.info(`Nouveau message : ${notif.message}`, 'Message');
      } else if (notif.type === NotificationType.RENDEZVOUS) {
        this.rendezvousNotifications.unshift(notif);
        this.toastr.success(`Nouveau rendez-vous : ${notif.message}`, 'Rendez-vous');
      }
    },
    error: (err) => {
      console.error('Erreur lors de la connexion SSE :', err);
    }
  });

  // 3. Chargement des informations du médecin
  this.getMedecin();

  // 4. Chargement des disponibilités du médecin
  this.loadDisponibilites();

  // 5. Chargement des rendez-vous du médecin
  this.rendezVousService.getRendezVousByMedecinId(this.userId).subscribe({
    next: (data) => {
      this.listrendezVousMedecin = data;
      console.log("Liste des rendez-vous : ", this.listrendezVousMedecin);
    },
    error: (err) => {
      console.error('Erreur lors de la récupération des rendez-vous :', err);
    }
  });
}


  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  getUnreadMessagesCount(): number {
  return this.messageNotifications.filter(n => !n.lue).length;
}

getUnreadRendezvousCount(): number {
  return this.rendezvousNotifications.filter(n => !n.lue).length;
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
