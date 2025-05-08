// import { Injectable } from '@angular/core';
// import { Client, IMessage, Stomp } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';
// import { BehaviorSubject } from 'rxjs';
// import { ChatMessage } from '../models/chatmessege';

// @Injectable({ providedIn: 'root' })
// export class ChatService {
//   private stompClient: Client;
//   private messageSubject = new BehaviorSubject<ChatMessage | null>(null);
//   public messages$ = this.messageSubject.asObservable();

//   constructor() {
//     this.stompClient = new Client({
//       webSocketFactory: () => new SockJS('http://localhost:8080/ws-chat'),
//       reconnectDelay: 5000,
//       debug: (str) => console.log(str),
//     });

//     this.stompClient.onConnect = () => {
//       this.stompClient.subscribe('/topic/messages', (message: IMessage) => {
//         const chatMessage: ChatMessage = JSON.parse(message.body);
//         this.messageSubject.next(chatMessage);
//       });
//     };

//     this.stompClient.activate();
//   }

//   sendMessage(msg: ChatMessage) {
//     this.stompClient.publish({
//       destination: '/app/chat.sendMessage',
//       body: JSON.stringify(msg),
//     });
//   }
// }



// src/app/services/chat.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from '../models/chatmessege';

@Injectable({ providedIn: 'root' })
export class ChatService implements OnDestroy {
  private stompClient: Client;
  private messages: ChatMessage[] = [];
  private messagesSubject = new BehaviorSubject<ChatMessage[]>(this.messages);
  public messages$ = this.messagesSubject.asObservable();

  constructor() {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws-chat'),
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    this.stompClient.onConnect = () => {
      console.log('WebSocket Connected!');
      this.stompClient.subscribe('/topic/messages', (message: IMessage) => {
        const chatMessage: ChatMessage = JSON.parse(message.body);
        this.addMessage(chatMessage);
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Error: ' + frame.headers['message']);
    };

    this.stompClient.activate();
  }

  // Envoyer un message au serveur
  sendMessage(msg: ChatMessage) {
    if (this.stompClient.connected) {
      this.stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(msg),
      });
    } else {
      console.error('WebSocket not connected.');
    }
  }

  // Ajouter un message à la liste et notifier les abonnés
  private addMessage(message: ChatMessage) {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }

  // Déconnexion propre du WebSocket
  ngOnDestroy() {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }
}
