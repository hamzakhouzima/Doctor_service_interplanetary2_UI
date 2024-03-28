import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators'; // Import switchMap operator
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Convert the Promise returned by getToken() into an Observable
    return from(this.keycloakService.getToken()).pipe(
      switchMap(token => {
        // Clone the request to add the Authorization header
        const clonedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        // Pass the cloned request instead of the original request to the next handler
        return next.handle(clonedRequest);
      })
    );
  }
}
