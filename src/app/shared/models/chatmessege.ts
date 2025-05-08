export interface ChatMessage {
  sender: string;
  content: string;
  receiver: string;
  timestamp?: Date;
  senderRole: 'patient' | 'medecin';

}
