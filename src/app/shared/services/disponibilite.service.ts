import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Disponibilite } from '../models/disponibilite';

@Injectable({
  providedIn: 'root'
})
export class DisponibiliteService {

  baseUrl = environment.baseUrl+ "/disponibilites"

  constructor(private  http : HttpClient) { }


getAllDisponibilite() : Observable<Disponibilite[]>{
  return this.http.get<Disponibilite[]>(`${this.baseUrl}/getAllDisponibilites`)

}


addDisponibilite(disponibilite : Disponibilite) : Observable<Disponibilite>{
  return this.http.post<Disponibilite>(`${this.baseUrl}/addDisponibilite`,disponibilite)

}

deleteDisponibilite( id : any) {
  return this.http.delete(`${this.baseUrl}/deleteDesponibilite/${id}`)

}


updateDisponibilte(disponibilite: any): Observable<any> {

  return this.http.put(`${this.baseUrl}/updatemedecin`, disponibilite);
}



getDisponibilitesByMedecinId(medecinId: number): Observable<Disponibilite[]> {
  return this.http.get<Disponibilite[]>(`${this.baseUrl}/medecin/${medecinId}`);
}

}
