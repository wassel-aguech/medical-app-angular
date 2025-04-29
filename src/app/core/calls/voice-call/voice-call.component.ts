import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-voice-call',
    templateUrl: './voice-call.component.html',
    styleUrls: ['./voice-call.component.scss'],
    standalone: false
})
export class VoiceCallComponent {
  public routes = routes;
}
