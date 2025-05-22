import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const patientGuard: CanActivateFn = (route, state) => {

  const authService = inject (AuthService);
  const router = inject (Router);

  if(authService.getRole() == 'patient'){
  return true;
  }else{

    router.navigate(['/error/error404']);
    return false;

  }
};
