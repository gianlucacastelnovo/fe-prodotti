import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  basepath = 'http://localhost:8080/user';
 constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error('An error occurred:', error.error.message);
       alert(error.error.message);
    } else {
      alert(error.status);
        console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }


  sincro( idPartner ): Observable<User> {
    const headers = { 'content-type': 'application/json'}

    const user = new User();
    user.id = 1;
    user.idPartner = idPartner;
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post<User>(this.basepath + '/sincro', body, {headers});
  }

}
