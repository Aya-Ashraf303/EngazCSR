import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
const _router :Router = inject(Router)

    if(localStorage.getItem('isLoggedin')==='true'){
      return true
    }
  return _router.createUrlTree(['']) ;
};
