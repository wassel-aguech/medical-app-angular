import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data/data.service';
import { SideBarService } from '../shared/side-bar/side-bar.service';
import { MenuItem, SideBarData } from '../shared/models/models';
interface Route {
  url: string;
  // Add other properties if necessary
}

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
    standalone: false
})
export class CoreComponent {
  public miniSidebar = 'false';
  public expandMenu = 'false';
  public mobileSidebar = 'false';
  public sideBarActivePath = false;
  public headerActivePath = false;
  base = '';
  page = '';
  currentUrl = '';

  constructor(private sideBar: SideBarService,public router: Router,private data: DataService,) 
  {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = 'true';
      } else {
        this.miniSidebar = 'false';
      }
    });

    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = 'true';
      } else {
        this.mobileSidebar = 'false';
      }
    });

    this.sideBar.expandSideBar.subscribe((res: string) => {
      this.expandMenu = res;
      if (res == 'false' && this.miniSidebar == 'true') {
        this.data.sideBar.map((mainMenus: SideBarData) => {
          mainMenus.menu.map((resMenu: MenuItem) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      if (res == 'true' && this.miniSidebar == 'true') {
        this.data.sideBar.map((mainMenus: SideBarData) => {
          mainMenus.menu.map((resMenu: MenuItem) => {
            const menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
    this.getRoutes(this.router);
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }
  private getRoutes(route: Route): void {
    if (
      route.url.split('/')[2] === 'confirm-mail'
    ) {
      this.sideBarActivePath = false;
      this.headerActivePath = false;
    } else {
      this.sideBarActivePath = true;
      this.headerActivePath = true;
    }
  }
}
