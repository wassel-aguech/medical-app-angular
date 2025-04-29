import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { blogs } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: false
})
export class BlogComponent {
  public routes = routes;
  public blogs : Array<blogs>;

  constructor(public data : DataService){
    this.blogs = this.data.blogs
  }
}
