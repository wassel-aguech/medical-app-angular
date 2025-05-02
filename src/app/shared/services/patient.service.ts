import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {



  baseUrl = environment.baseUrl+ "/patients"

  constructor(  private http: HttpClient , private  router : Router ) { }


  getAllPatient() : Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/getallpatients`)

  }

  getPatientByid( id : any) : Observable<Patient>{
    return this.http.get<Patient>(`${this.baseUrl}/getPatientById/${id}`)

  }


  addPatient(patient : Patient) : Observable<Patient>{
    return this.http.post<Patient>(`${this.baseUrl}/addMedecin`,patient)

  }

  deletePatient( id : any) {
    return this.http.delete(`${this.baseUrl}/deletePatient/${id}`)

  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseUrl}/updateMedecin/${id}`, patient);
  }



  uploadPatientImage(idPatient: number, image: File ): Observable<Patient> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    return this.http.post<Patient>(`${this.baseUrl}/uploadImage/${idPatient}`, formData);
  }






}
