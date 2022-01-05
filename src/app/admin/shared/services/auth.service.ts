import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IUser } from "../interfaces/user.interface";
import { Observable, Subject, throwError } from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import { FbAuthResponse } from "../interfaces/fbAuthresponse.interface";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  error$: Subject<string> = new Subject<string>()

  constructor (private http: HttpClient) {}

  get token(): string | null {
    const expDate = localStorage.getItem('fb-token-exp')
    if(new Date() > new Date(`${expDate}`)) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: IUser): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
    .pipe(
      tap(this.setToken),
      catchError(this.errorHandle.bind(this))
    )
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private errorHandle(error: HttpErrorResponse) {
    const { message } = error.error.error

    switch ( message ) {
      case 'INVALID_EMAIL':
        this.error$.next ( 'Wrong Email' )
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong Password')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Sorry, we could not found your Email')
        break
    }
    return throwError(() => error)
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}

