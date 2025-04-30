import { Component, inject, OnInit } from '@angular/core';
import { Medecin } from 'src/app/shared/models/medecin';
import { routes } from 'src/app/shared/routes/routes';
import { MedecinService } from 'src/app/shared/services/medecin.service';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.scss'],
    standalone: false
})
export class DoctorProfileComponent implements OnInit {

  public routes = routes;
  medecinservice = inject(MedecinService)
  medecin : Medecin = new Medecin();
  userId: string | null = null;


  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');
  }

  constructor() { }



  getMedecin() {
    this.medecinservice.getMedecinByid(this.userId).subscribe((data: Medecin) => {
      this.medecin = data;
      console.log(" medecin  data est ", this.medecin);
    });
  }
}
