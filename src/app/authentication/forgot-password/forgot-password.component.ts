import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    standalone: false
})
export class ForgotPasswordComponent {
  public routes = routes;

  constructor(public router : Router){

  }
  direction(){
    this.router.navigate([routes.login]);
  }
}
