import { Component, OnInit } from '@angular/core';
// import { CarrelloSpesa } from './carrelloSpesa';
// import { CARRELLO} from './mock_carrello';
import { CarrelloService } from '../services/carrello/carrelllo.service';
import { ProdottoService } from '../services/prodotto/prodotto.service';
import { Prodotto } from '../models/prodotto';
import { ProdottoCarrello } from '../models/carrello';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
 // carrellos = CARRELLO;Carrello
 list: any;

  constructor(
    public service: CarrelloService
  ) {
    this.list = [];
  }

  ngOnInit() {
    this.getPCInCarrello(1);
  }

   getPCInCarrello(id) {
    this.service.getPCInCarrello(id).subscribe(response => {
      this.list = response;
     });


  }

  onChange(element: any, numero: number){
    element.num = element.num + numero;
    if( element.num < 0 ) element.num = 0 ;
    this.service.sincroPC(element).subscribe(response => {
      this.list = response;
    } );
    return false;
  }
  sendMessage(): void {
    this.service.sendMessage('Message from Home Component to App Component!');
}
public selectEmployeeFromList(e) {

  e.stopPropagation();
  e.preventDefault();

  console.log("This onClick method should prevent routerLink from executing.");

  return false;
}
clearMessages(): void {
    this.service.clearMessages();
}

}
