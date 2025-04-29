import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  public routes = routes;
  public openBox = false;
  public miniSidebar  = false;
  public addClass = false;

  constructor(public router: Router,private sideBar: SideBarService) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }

  openBoxFunc() {
    this.openBox = !this.openBox;
    /* eslint no-var: off */
    var mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    if (this.openBox) {
      mainWrapper.classList.add('open-msg-box');
    } else {
      mainWrapper.classList.remove('open-msg-box');
    }
  }

  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
    
      this.addClass = !this.addClass;
      /* eslint no-var: off */
      var root = document.getElementsByTagName( 'html' )[0];
      /* eslint no-var: off */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var sidebar:any = document.getElementById('sidebar')
  
      if (this.addClass) {
        root.classList.add('menu-opened');
        sidebar.classList.add('opened');
      }
      else {
        root.classList.remove('menu-opened');
        sidebar.classList.remove('opened');
      }
    }
  }
