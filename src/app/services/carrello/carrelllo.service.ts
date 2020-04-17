import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Prodotto } from '../../models/prodotto';
import { ProdottoCarrello } from '../../models/carrello';
import { User } from '../../models/user';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  [x: string]: any;

  basepath = 'http://localhost:8080/carrello';
  user: User;
  p: Observable<ProdottoCarrello> ;
  p1: ProdottoCarrello[];
 constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
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
    return throwError('Something bad happened; please try again later.');
  }

  getPCInCarrello( id ): Observable<ProdottoCarrello> {
    return this.http
      .get<ProdottoCarrello>(this.basepath + '/pc/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }


  sincroProdotto(pc: ProdottoCarrello): Observable<ProdottoCarrello> {



    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(pc);
    console.log(body);

    this.p = this.http.post<ProdottoCarrello>(this.basepath + '/sincro', body,{'headers':headers});

    this.user = JSON.parse(localStorage.getItem('currentUser'));


     localStorage.setItem('currentUser', JSON.stringify(this.user));
    return this.p;
  }



}
