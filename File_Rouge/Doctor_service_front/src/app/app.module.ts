import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { OperationComponent } from "./operation/operation.component";
import { LoginComponent } from './login/login.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

// Function to initialize Keycloak
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8001/',
        realm: 'spring-boot-microservices-realm',
        clientId: 'spring-cloud-client',
      },
      initOptions: {
        onLoad: 'check-sso',
        flow: 'standard',
        // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      },
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {   constructor(private readonly keycloakService: KeycloakService) {}
}
