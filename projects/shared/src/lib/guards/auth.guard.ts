import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { LOCAL_STORAGE } from '../constants/common.constant';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(LOCAL_STORAGE.Authorization)) {
      return true;
    }
    this.router.navigate(['signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
