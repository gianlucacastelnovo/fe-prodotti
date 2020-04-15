import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Prodotto } from '../../models/prodotto';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  basepath = 'http://localhost:8080/prodotto';
//  sincrobasepath   = 'http://localhost:8080/prodotto/sincrocarrello';
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

  getList(): Observable<Prodotto> {
    return this.http
      .get<Prodotto>(this.basepath + '/all')
      .pipe(retry(2), catchError(this.handleError));
  }

  sincroCarrello( prodottoData ) {
    return this.http.put(this.basepath + 'sincro', prodottoData)
    .pipe(retry(2), catchError(this.handleError));
  }

  addProdotto(prodotto: Prodotto): Observable<Prodotto> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(prodotto);
    console.log(body)
    return this.http.post<Prodotto>(this.basepath + '/add', body,{'headers':headers})
  }

  addProductToCarrello(prodotto){
    return this.http.put(this.basepath + '/put' , prodotto)
    .pipe(retry(2), catchError(this.handleError));
  }

  sincroProdotto(prodotto: Prodotto): Observable<Prodotto> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(prodotto);
    console.log(body)
    return this.http.post<Prodotto>(this.basepath + '/sincro', body,{'headers':headers})
  }

}
