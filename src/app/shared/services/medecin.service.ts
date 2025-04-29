import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Medecin } from '../models/medecin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  baseUrl = environment.baseUrl+ "/medecins"

  constructor(private  http : HttpClient) { }


getAllMedecins() : Observable<Medecin[]>{
  return this.http.get<Medecin[]>(`${this.baseUrl}/getallmedecins`)

}

getMedecinByid( id : any) : Observable<Medecin>{
  return this.http.get<Medecin>(`${this.baseUrl}/getMedecinById/${id}`)

}

addMedecin(medecin : Medecin) : Observable<Medecin>{
  return this.http.post<Medecin>(`${this.baseUrl}/addMedecin`,medecin)

}

deleteMedecin( id : any) {
  return this.http.delete(`${this.baseUrl}/deletemedecin/${id}`)

}

updateMedecin(id: number, medecin: Medecin): Observable<Medecin> {
  return this.http.put<Medecin>(`${this.baseUrl}/updateMedecin/${id}`, medecin);
}



  uploadMedecinImage(IdMedecin: number, image: File ): Observable<Medecin> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    return this.http.post<Medecin>(`${this.baseUrl}/uploadImage/${IdMedecin}`, formData);
  }


}
