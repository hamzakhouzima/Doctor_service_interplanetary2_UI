import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private keycloakService: KeycloakService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    try {
      const loggedIn = await this.keycloakService.isLoggedIn();
      if (loggedIn) {

         // this.router.navigate(['/search']);

        return true;
      }
      // redirect to login page if not logged in
      await this.router.navigate(['/login']);
      return false;
    } catch (error) {
      // handle error or redirect to login
      await this.router.navigate(['/login']);
      return false;
    }
  }
}
