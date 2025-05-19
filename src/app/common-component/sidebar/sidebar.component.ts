// import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { DataService } from 'src/app/shared/data/data.service';
// import { MenuItem, SideBarData } from 'src/app/shared/models/models';
// import { routes } from 'src/app/shared/routes/routes';
// import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

// @Component({
//     selector: 'app-sidebar',
//     templateUrl: './sidebar.component.html',
//     styleUrls: ['./sidebar.component.scss'],
//     standalone: false
// })
// export class SidebarComponent {
//   base = '';
//   page = '';
//   currentUrl = '';
//   public classAdd = false;

//   public multilevel: Array<boolean> = [false, false, false];

//   public routes = routes;
//   public sidebarData: Array<SideBarData> = [];

//   constructor(
//     private data: DataService,
//     private router: Router,
//     private sideBar: SideBarService
//   ) {
//     this.sidebarData = this.data.sideBar;
//     router.events.subscribe((event: object) => {
//       if (event instanceof NavigationEnd) {
//         this.getRoutes(event);
//       }
//     });
//     this.getRoutes(this.router);
//   }

//   public expandSubMenus(menu: MenuItem): void {
//     sessionStorage.setItem('menuValue', menu.menuValue);
//     this.sidebarData.map((mainMenus: SideBarData) => {
//       mainMenus.menu.map((resMenu: MenuItem) => {
//         if (resMenu.menuValue == menu.menuValue) {
//           menu.showSubRoute = !menu.showSubRoute;
//         } else {
//           resMenu.showSubRoute = false;
//         }
//       });
//     });
//   }
//   private getRoutes(route: { url: string }): void {
//     const bodyTag = document.body;

//     bodyTag.classList.remove('slide-nav')
//     bodyTag.classList.remove('opened')
//     this.currentUrl = route.url;

//     const splitVal = route.url.split('/');


//     this.base = splitVal[1];
//     this.page = splitVal[2];
//   }
//   public miniSideBarMouseHover(position: string): void {
//     if (position == 'over') {
//       this.sideBar.expandSideBar.next("true");
//     } else {
//       this.sideBar.expandSideBar.next("false");
//     }
//   }

// }
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { MenuItem, SideBarData } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false
})
export class SidebarComponent {
  base = '';
  page = '';
  currentUrl = '';
  public classAdd = false;
  public multilevel: Array<boolean> = [false, false, false];
  public routes = routes;
  public sidebarData: Array<SideBarData> = [];

  constructor(
    private data: DataService,
    private router: Router,
    private sideBar: SideBarService
  ) {
    const role = this.getUserRole(); // 1. récupérer le rôle actuel
    const rawSidebar = this.data.sideBar; // données JSON brutes

    // 2. filtrer les menus
    this.sidebarData = this.filterSidebarByRole(rawSidebar, role);

    router.events.subscribe((event: object) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
  }

  public expandSubMenus(menu: MenuItem): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.sidebarData.map((mainMenus: SideBarData) => {
      mainMenus.menu.map((resMenu: MenuItem) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }

  private getRoutes(route: { url: string }): void {
    const bodyTag = document.body;
    bodyTag.classList.remove('slide-nav', 'opened');
    this.currentUrl = route.url;

    const splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
  }

  public miniSideBarMouseHover(position: string): void {
    if (position === 'over') {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }

  // ✅ Récupération du rôle utilisateur (à adapter selon ton projet)
  private getUserRole(): string {
    // Exemples : 'ROLE_ADMIN', 'ROLE_DOCTOR', 'ROLE_PATIENT'
    return localStorage.getItem('role') || '';
  }

  // ✅ Filtrage du menu selon le rôle
  private filterSidebarByRole(sidebar: SideBarData[], role: string): SideBarData[] {
    return sidebar.map(section => ({
      ...section,
      menu: section.menu
        .filter(menuItem => !menuItem.roles || menuItem.roles.includes(role))
        .map(menuItem => ({
          ...menuItem,
          subMenus: menuItem.subMenus
            ? menuItem.subMenus.filter(sub => !sub.roles || sub.roles.includes(role))
            : [],
        }))
    })).filter(section => section.menu.length > 0);
  }
}
