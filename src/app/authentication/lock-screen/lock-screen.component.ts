import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrls: ['./lock-screen.component.scss'],
    standalone: false
})
export class LockScreenComponent {
  public routes = routes;
  public passwordClass  = false;

  constructor(public router : Router){

  }
  
  direction(){
    this.router.navigate([routes.login])
  }
  togglePassword(){
    this.passwordClass = !this.passwordClass
  }
}
