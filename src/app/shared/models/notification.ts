
export interface Notification {
  id: number;
  destinataireId: number;
  message: string;
  dateEnvoi: string;
  lue: boolean;
  type: NotificationType;
}


export enum NotificationType {
  RENDEZVOUS = 'RENDEZVOUS',
  MESSAGE = 'MESSAGE'
}
