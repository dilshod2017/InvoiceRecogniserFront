import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SecurityService } from '../../admin/services/security.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private securityService:SecurityService,
              private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree>{
   return this._activate(route, state);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this._activate(route, state);
  }
  private _activate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> =>{
    if(!this.securityService.isAuthenticated()){
      this.router.navigate(["/login"]);
      return false;
    }
   return route.data?.isAdmin
     ? this.securityService.currentUser.isAdmin
     : true;
  }
}
