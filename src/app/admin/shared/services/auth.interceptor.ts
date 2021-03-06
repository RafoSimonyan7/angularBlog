import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor (private authService: AuthService, private route: Router) {}

  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if ( this.authService.isAuthenticated() ) {
      req = req.clone({
        setParams: {
          auth: this.authService.token as string
        }
      })
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if ( error.status === 401 ) {
            this.authService.logout()
            this.route.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            })
          }
          return throwError(() => error)
        })
      )
  }

}
