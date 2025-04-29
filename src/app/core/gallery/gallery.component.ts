import { Component} from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: false
})
export class GalleryComponent {
  public routes = routes;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
   
    const { index, prevIndex } = detail; // eslint-disable-line @typescript-eslint/no-unused-vars 
  };
}
