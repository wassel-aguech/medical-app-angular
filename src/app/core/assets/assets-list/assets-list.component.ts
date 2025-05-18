import { Component, OnInit } from '@angular/core';

import { routes } from 'src/app/shared/routes/routes';
import { ChatbotService, ChatRequest, ChatResponse } from 'src/app/shared/services/chatboot.service';

@Component({
    selector: 'app-assets-list',
    templateUrl: './assets-list.component.html',
    styleUrls: ['./assets-list.component.scss'],
    standalone: false
})
export class AssetsListComponent {
  public routes = routes;

prompt = '';
  messages: { sender: string, text: string }[] = [];
  userId = localStorage.getItem("cin") || '';
 // CIN ou ID fictif
  discussionId?: string;

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    const chat: ChatRequest = {
      user_id: this.userId,
      prompt: this.prompt,
      discussion_id: "123",
    };

    this.messages.push({ sender: 'Vous', text: this.prompt });

    this.chatbotService.sendMessage(chat).subscribe({
      next: (response: ChatResponse) => {
        this.messages.push({ sender: 'Chatbot', text: response.generated_text });
        this.discussionId = response.discussion_id;
        this.prompt = '';
      },
      error: (error) => {
        this.messages.push({ sender: 'Erreur', text: 'Une erreur est survenue.' });
        console.error(error);
      }
    });
  }
}
