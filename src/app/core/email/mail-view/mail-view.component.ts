import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-mail-view',
    templateUrl: './mail-view.component.html',
    styleUrls: ['./mail-view.component.scss'],
    standalone: false
})
export class MailViewComponent {
  public routes = routes;
}
