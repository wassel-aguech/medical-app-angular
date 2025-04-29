// import { Injectable } from '@angular/core';
// import {

//   CanActivate,
//   Router,

//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { routes } from '../routes/routes';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}
//   canActivate(

//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//       if (localStorage.getItem('authenticated')) {
//         return true;
//       } else {
//         this.router.navigate([routes.login]);
//         return false;
//       }
//   }
// }
