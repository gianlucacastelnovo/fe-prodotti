import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../../app/models/user';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  [x: string]: any;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    basepath = 'http://localhost:8080/user';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Impossibile accedere utente non abilitato');
  }



    login(username: string, password: string) {
      const headers = { 'content-type': 'application/json'};
      const user = new User();
      user.username = username;
      user.password = password;
      user.idPartner = null;
      user.token = '';
      const body = JSON.stringify(user);
      console.log(body);

      return this.http.post<any>(this.basepath + '/authenticate', body, { 'headers' : headers})
      .pipe(
      retry(2),
      map(user1 => {
        localStorage.clear();
        localStorage.setItem('currentUser', JSON.stringify(user1));
        this.currentUserSubject.next(user1);
        return user1;
    })
    , catchError(this.handleError)
    );


    }

    register( username: string, email: string, password: string, indirizzo: string) {

      const headers = { 'content-type': 'application/json'};
      const user = new User();
      user.username = username;
      user.password = password;
      user.email = email;
      user.indirizzo = indirizzo;
      user.idPartner = null;
      user.token = '';
      const body = JSON.stringify(user);
      console.log(body);

      return this.http.post<any>(this.basepath + '/register', body, { 'headers' : headers})
      .pipe(
      retry(2),
      map(user1 => {
        localStorage.clear();
        localStorage.setItem('currentUser', JSON.stringify(user1));
        this.currentUserSubject.next(user1);
        return user1;
    })
    , catchError(this.handleError)
    );


    }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
