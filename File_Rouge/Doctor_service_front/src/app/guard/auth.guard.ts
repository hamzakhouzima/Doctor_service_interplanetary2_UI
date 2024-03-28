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
        return true;
      }
      // Redirect to login page if not logged in
      await this.router.navigate(['/login']);
      return false;
    } catch (error) {
      // Handle error or redirect to login
      await this.router.navigate(['/login']);
      return false;
    }
  }
}
