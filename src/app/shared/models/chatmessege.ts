export interface ChatMessage {
  sender: string;
  content: string;
  receiver: string;      // peut rester, c'est probablement un nom ou username
  receiverId: number;    // <- ajoute ce champ ici !
  timestamp?: Date;
  senderRole: 'patient' | 'medecin';
}
