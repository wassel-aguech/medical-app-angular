import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { RendezVous } from '../models/rendezVous';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  baseUrl = environment.baseUrl+ "/rendezvous"

  constructor(  private http: HttpClient , private  router : Router ) { }



  addRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
    return this.http.post<RendezVous>(`${this.baseUrl}/addRendezVous`, rendezVous);
  }



  getRendezVousByPatientId(patientId: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.baseUrl}/getrendezvousbypatientid/${patientId}`);
  }

  getRendezVousByMedecinId(medecinId: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.baseUrl}/getrendezvousbymedecinid/${medecinId}`);
  }



  repondreRendezVous(id: number, reponse: { dateRendezVous: string, motif: string }): Observable<any> {
    return this.http.put(`${this.baseUrl}/rendezvous/${id}/repondre`, reponse);
  }


}
