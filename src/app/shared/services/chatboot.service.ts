import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ChatRequest {
  user_id: string;
  prompt: string;
  discussion_id?: string;
}

export interface ChatResponse {
  discussion_id: string;
  generated_text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private baseUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) {}

  sendMessage(data: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.baseUrl}/employer/chat`, data);
  }
}
