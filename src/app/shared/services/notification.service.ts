import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { EventSourcePolyfill } from 'event-source-polyfill';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private ngZone: NgZone) {}

  connect(medecinId: number): Observable<string> {
    return new Observable<string>(observer => {
      const eventSource = new EventSourcePolyfill(
        `http://localhost:8080/api/v1/notifications/notifications/${medecinId}`,
        {
          headers: {
            // Si authentification est requise :
            // Authorization: `Bearer ${your_token}`
          },
          heartbeatTimeout: 60000,
          withCredentials: true
        }
      );

      eventSource.onmessage = (event : any) => {
        this.ngZone.run(() => {
          observer.next(event.data);
        });
      };

      eventSource.onerror = (error : any) => {
        this.ngZone.run(() => {
          observer.error(error);
        });
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    });
  }
}
