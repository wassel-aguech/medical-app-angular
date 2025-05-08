// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ChatMessage } from 'src/app/shared/models/chatmessege';
// import { routes } from 'src/app/shared/routes/routes';
// import { ChatService } from 'src/app/shared/services/chat.service';

// @Component({
//     selector: 'app-chat',
//     templateUrl: './chat.component.html',
//     styleUrls: ['./chat.component.scss'],
//     standalone: false
// })
// export class ChatComponent {
//   public routes = routes;


//   messages: ChatMessage[] = [];
//   newMessage = '';
//   currentUser = 'Patient A'; // à ajuster selon l'utilisateur connecté
//   receiver = 'Dr. B'; // à ajuster dynamiquement selon le profil du médecin
//   doctorId: string = '';
//   private messageSubscription: any;

//   constructor(private chatService: ChatService, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     // Récupérer l'ID du médecin depuis l'URL
//     this.doctorId = this.route.snapshot.paramMap.get('doctorId')!;
//     console.log('Médecin sélectionné ID:', this.doctorId);

//     // S'abonner aux messages du service
//     this.messageSubscription = this.chatService.messages$.subscribe((msgs: ChatMessage[]) => {
//       this.messages = msgs;
//     });
//   }

//   ngOnDestroy(): void {
//     // Se désabonner lorsque le composant est détruit
//     if (this.messageSubscription) {
//       this.messageSubscription.unsubscribe();
//     }
//   }

//   send(): void {
//     if (this.newMessage.trim()) {
//       const message: ChatMessage = {
//         sender: this.currentUser,
//         receiver: this.receiver,
//         content: this.newMessage,
//         timestamp: new Date(),
//       };
//       // Envoyer le message au service
//       this.chatService.sendMessage(message);
//       this.newMessage = '';
//     }
//   }
// }


import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ChatMessage } from 'src/app/shared/models/chatmessege';
import { routes } from 'src/app/shared/routes/routes';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: false
})
export class ChatComponent implements OnInit, OnDestroy {
  public routes = routes;

  messages: ChatMessage[] = [];
  newMessage = '';
  currentUser = '';   // Remplira automatiquement selon le rôle
  receiver = '';      // Nom du destinataire
  receiverId = '';    // ID du destinataire
  role = '';          // 'patient' ou 'medecin'

  @ViewChild('chatBox') chatBox!: ElementRef;


  private messageSubscription: any;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Déterminer dynamiquement le rôle et l'ID du destinataire à partir de l'URL
    this.route.url.subscribe((segments: UrlSegment[]) => {
      if (segments.length >= 2) {
        this.role = segments[1].path;

        if (this.role === 'patient') {
          this.receiverId = this.route.snapshot.paramMap.get('doctorId')!;
          this.currentUser = localStorage.getItem('patientName') || 'Patient';
          this.receiver = 'Dr. ' + this.receiverId; // Remplace si tu as mieux
        } else if (this.role === 'medecin') {
          this.receiverId = this.route.snapshot.paramMap.get('patientId')!;
          this.currentUser = localStorage.getItem('doctorName') || 'Médecin';
          this.receiver = 'Patient ' + this.receiverId;
        }

        console.log('Role:', this.role, '| CurrentUser:', this.currentUser, '| ReceiverId:', this.receiverId);
      }
    });

    this.messageSubscription = this.chatService.messages$.subscribe((msgs: ChatMessage[]) => {
      this.messages = msgs;
      this.scrollToBottom();
    });

  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  // send(): void {
  //   if (this.newMessage.trim()) {
  //     const message: ChatMessage = {
  //       sender: this.currentUser,
  //       receiver: this.receiver,
  //       content: this.newMessage,
  //       timestamp: new Date(),
  //     };
  //     this.chatService.sendMessage(message);
  //     this.newMessage = '';
  //   }
  // }

  send(): void {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        sender: this.getSenderName(),  // ex: 'Dr. Mohamed' ou 'Patient Ali'
        receiver: this.receiver,
        content: this.newMessage,
        timestamp: new Date(),
        senderRole: this.getUserRole(),
      };

      this.chatService.sendMessage(message);
      this.newMessage = '';
    }
  }

  getUserRole(): 'patient' | 'medecin' {
    return localStorage.getItem('role') === 'medecin' ? 'medecin' : 'patient';
  }

  getSenderName(): string {
    // Tu peux adapter avec le nom depuis le localStorage, token, ou ton AuthService
    return localStorage.getItem('fullName') || 'Utilisateur';
  }




  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
      }, 100); // léger délai pour que l’affichage se mette à jour
    } catch (err) {
      console.error('Erreur de scroll', err);
    }
  }




}
