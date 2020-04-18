import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Prodotto } from '../../models/prodotto';
import { ProdottoCarrello } from '../../models/carrello';
import { User } from '../../models/user';
import { Observable, throwError, of, Subject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  [x: string]: any;

  basepath = 'http://localhost:8080/carrello';
  user: User;
  p: Observable<ProdottoCarrello> ;
  list: any;

  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.clearMessages();
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

 getMessage(): Observable<any> {
      return this.subject.asObservable();
  }



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

    this.p = this.http
      .get<ProdottoCarrello>(this.basepath + '/pc/' + id)
      .pipe(retry(2), catchError(this.handleError));

    this.aggiornaCount();

    return this.p;
  }


  sincroPC(pc: ProdottoCarrello): Observable<ProdottoCarrello> {
  const headers = { 'content-type': 'application/json'}
  console.log(':::'+pc.num);

  const body = JSON.stringify(pc);

  this.p = this.http.post<ProdottoCarrello>(this.basepath + '/sincro', body, {'headers':headers});

  this.aggiornaCount();

  return this.p;

  }

  aggiornaCount(){
    this.p.subscribe(response => {
      this.list = response;
    } );
    let st : string;

    let cont = 0; // tslint:disable-next-line: curly
    if( this.list !=null)
    this.list.forEach( element => {
       if ( element.num > 0 ) cont++;

      });
   //   console.log(cont);
    this.sendMessage('Prodotti in carrello' + cont ); // qui uso ossevable carrelo send to app


    localStorage.setItem('num', cont + '' );
  }

}
