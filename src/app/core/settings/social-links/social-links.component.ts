import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { socialLinks } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-social-links',
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.scss'],
    standalone: false
})
export class SocialLinksComponent {
  public routes = routes;
  public socialLinks: Array<socialLinks> = []

  constructor(public data: DataService){
    this.socialLinks = this.data.socialLinks;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete(index:any) {
    this.socialLinks.splice(index, 1)
  }
  add(){
    this.socialLinks.push({
    icon:"github",
    placeholder:"Social Link"
    })
  }
}
