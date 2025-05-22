import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { Authenticationrequest } from '../models/Authenticationrequest';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import {jwtDecode} from 'jwt-decode';
import { Authenticationresponse } from '../models/Authenticationresponse';
import { Responsep } from '../models/response';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl = environment.baseUrl+ "/auth"
  private tokenKey = 'token'; // Clé du token dans le localStorage



  constructor(  private http: HttpClient , private  router : Router ) { }

  login(authenticationrequest:Authenticationrequest): Observable<AuthenticatorResponse> {
    return this.http.post<AuthenticatorResponse>(`${this.baseUrl}/authenticate`,authenticationrequest);
  }

  registerPation(Patien : Patient): Observable<Responsep> {
    return this.http.post<Responsep>(`${this.baseUrl}/registerpatient`, Patien);
  }






  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



  setUserToken(authenticationresponse: Authenticationresponse): { id?: number, role?: string, fullName?: string, cin?: string } | null {
  if (!authenticationresponse || !authenticationresponse.accessToken) {
    console.error('Token is missing');
    return null;
  }

  localStorage.setItem("accessToken", authenticationresponse.accessToken);
  const token = authenticationresponse.accessToken;

  try {
    const decodedToken = jwtDecode(token) as any;
    console.log("Decoded Token:", decodedToken);

    let userData: { id?: number, role?: string, fullName?: string, cin?: string } = {};

    // Full name
    if (decodedToken.fullname || decodedToken.name) {
      const fullName = decodedToken.fullname || decodedToken.name;
      localStorage.setItem("fullName", fullName);
      userData.fullName = fullName;
    }

    // User ID
    if (decodedToken.userId || decodedToken.sub) {
      const userId = decodedToken.userId || decodedToken.sub;
      localStorage.setItem("userId", userId.toString());
      userData.id = parseInt(userId);
    }

    // Role
    if (decodedToken.authorities && decodedToken.authorities.length > 0) {
      const authorities = Array.isArray(decodedToken.authorities)
        ? decodedToken.authorities[0].authority || decodedToken.authorities[0]
        : decodedToken.authorities;

      localStorage.setItem("role", authorities);
      userData.role = authorities;
    }

    // CIN
    if (decodedToken.cin) {
      localStorage.setItem("cin", decodedToken.cin);
      userData.cin = decodedToken.cin;
    }

    console.log("User Data Stored:", userData);
    return userData;

  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}


  getRole() : string | null{
    return localStorage.getItem ("role");

  }

    saveToken(token: string): void {
      localStorage.setItem(this.tokenKey, token);
    }

    getCurrentUser(): any {
      const token = localStorage.getItem(this.tokenKey);
      if (token) {
        try {
          const decodedToken: any = jwtDecode(token);
          return {
            id: decodedToken.id,
            role: decodedToken.role
          };
        } catch (error) {
          console.error('Erreur lors du décodage du token :', error);
          return null;
        }
      }
      return null;
    }

    getUserRole(): string | null {
      const user = this.getCurrentUser();
      return user ? user.role : null;
    }


 isUserAuthenticated():boolean{
    if (localStorage.getItem ("accessToken")){
      return true;
    }
      return false;
  }





}
