import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-video-call',
    templateUrl: './video-call.component.html',
    styleUrls: ['./video-call.component.scss'],
    standalone: false
})
export class VideoCallComponent {
  public routes = routes;
}
