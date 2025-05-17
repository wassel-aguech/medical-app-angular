

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

  // ngOnInit(): void {
  //   // Déterminer dynamiquement le rôle et l'ID du destinataire à partir de l'URL
  //   this.route.url.subscribe((segments: UrlSegment[]) => {
  //     if (segments.length >= 2) {
  //       this.role = segments[1].path;

  //       if (this.role === 'patient') {
  //         this.receiverId = this.route.snapshot.params['doctorId'];
  //         this.currentUser = localStorage.getItem('patientName') || 'Patient';
  //         this.receiver = 'Dr. ' + this.receiverId;
  //       } else if (this.role === 'medecin') {
  //         this.receiverId = this.route.snapshot.params['patientId'];
  //         this.currentUser = localStorage.getItem('doctorName') || 'Médecin';
  //         this.receiver = 'Patient ' + this.receiverId;
  //       }

  //       console.log('Role:', this.role, '| CurrentUser:', this.currentUser, '| ReceiverId:', this.receiverId);
  //     }
  //   });

  ngOnInit() {
            this.role = localStorage.getItem('role') || ''


      if (this.role === 'patient') {
        this.receiverId = this.route.snapshot.params['doctorId'];
        this.currentUser = localStorage.getItem('patientName') || 'Patient';
        this.receiver = 'Dr. ' + this.receiverId;
      } else if (this.role === 'medecin') {
        this.receiverId = this.route.snapshot.params['patientId'];
        this.currentUser = localStorage.getItem('doctorName') || 'Médecin';
        this.receiver = 'Patient ' + this.receiverId;
      }
      console.log('Role:', this.role, '| CurrentUser:', this.currentUser, '| ReceiverId:', this.receiverId);



    this.messageSubscription = this.chatService.messages$.subscribe((msgs: ChatMessage[]) => {
      this.messages = msgs;
      this.scrollToBottom();
    });


      console.log('ngOnInit exécuté');


  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }


  send(): void {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        sender: this.getSenderName(),  // ex: 'Dr. Mohamed' ou 'Patient Ali'
        receiver: this.receiver,
        content: this.newMessage,
        timestamp: new Date(),
        receiverId : Number(this.receiverId),
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
