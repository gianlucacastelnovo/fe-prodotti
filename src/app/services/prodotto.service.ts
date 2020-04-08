import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Prodotto } from '../models/prodotto';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  // API path
  basepath = 'http://localhost:8080/prodotto/all';

  baseprodottopath = 'http://localhost:8080/prodotto/';
  putbasepath1 = 'http://localhost:8080/prodotto/put';
  sincrobasepath = 'http://localhost:8080/prodotto/sincrocarrello';
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

  getList(): Observable<Prodotto> {
    return this.http
      .get<Prodotto>(this.basepath)
      .pipe(retry(2), catchError(this.handleError));
  }

  getProdottiCarrelloAll(): Observable<Prodotto> {
    return this.http
      .get<Prodotto>(this.baseprodottopath + 'carrello/all' )
      .pipe(retry(2), catchError(this.handleError));
  }

  getProdottiImCarrello( carrello ): Observable<Prodotto> {
    return this.http
      .get<Prodotto>(this.baseprodottopath + 'carrello/all/' + carrello.id)
      .pipe(retry(2), catchError(this.handleError));
  }

  sincroCarrello( prodottoData ) {
    return this.http.put(this.sincrobasepath, prodottoData)
    .pipe(retry(2), catchError(this.handleError));
  }


  addProdotto(prodotto: Prodotto): Observable<Prodotto> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(prodotto);
    console.log(body)
    return this.http.post<Prodotto>(this.baseprodottopath + 'add', body,{'headers':headers})
  }

  addProductToCarrello(prodotto){
    return this.http.put(this.baseprodottopath + 'put' , prodotto)
    .pipe(retry(2), catchError(this.handleError));
  }

}
