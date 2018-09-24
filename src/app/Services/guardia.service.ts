import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class GuardiaService implements CanActivate, CanActivateChild {

  constructor(private router: Router,
    private data: DataService) { }

  canActivate(): boolean {
    if (this.data.scopes) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url === '/dashboard/seguro-fraude') {
      if (this.data.scopes.includes("read:acmFraude")) {
        return true;
      }
      if (!this.data.scopes.includes("read:acmFraude")) {
        alert("No esta autorizado para consultar fraude");
        return false;
      }
    }
    if (state.url === '/dashboard/seguro-hogar') {
      if (this.data.scopes.includes("read:acmHogar")) {
        return true;
      }
      if (!this.data.scopes.includes("read:acmHogar")) {
        alert("No esta autorizado para consultar hogar");
        return false;
      }
    }
  }
}
