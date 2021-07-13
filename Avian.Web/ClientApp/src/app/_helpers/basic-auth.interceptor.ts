import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@app/_services';
import { CurrentUserModel } from '../_models/users-model-data';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<CurrentUserModel>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.Data.authdata) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser.Data.authdata}`
        }
      });
    }

    return next.handle(request);
  }
}
