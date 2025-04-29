import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-change-password2',
    templateUrl: './change-password2.component.html',
    styleUrls: ['./change-password2.component.scss'],
    standalone: false
})
export class ChangePassword2Component {
  public routes = routes;

constructor(public router : Router){

}

direction(){
  this.router.navigate([routes.login])
}
}
