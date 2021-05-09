import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStoreService } from './services/local-store/local-store.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(this.localStore.getItem("employee.role").match("MANAGER") || this.localStore.getItem("employee.role").match("OWNER"))
      {
        return true;
      }
     return false;
  }

  constructor(private localStore: LocalStoreService){}
}
