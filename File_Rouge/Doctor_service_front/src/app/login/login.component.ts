import { Component } from '@angular/core';
// import {OAuthLogger, OAuthService} from 'angular-oauth2-oidc';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'


})
export class LoginComponent {
  constructor(private readonly keycloakService: KeycloakService) {}
  ngOnInit() {
    // Check for existing SSO session
    this.keycloakService.isLoggedIn().then((isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        this.keycloakService.login().then(); // Redirect to Keycloak login page (no then needed)
      }
    });
  }
  logout() {
    this.keycloakService.logout();
  }
}
